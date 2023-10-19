import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TareasService } from '../services/tareas.service';
import { BddService } from '../services/bdd.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  Formulario: FormGroup = this.fb.group({
    titulo: [, [Validators.required, Validators.maxLength(99)]],
    descripcion: [, [Validators.required, Validators.maxLength(255)]],
    fecha: [, Validators.required],
    estado: [,Validators.required]
  });

  tareas: any[] = [];
  Index = -1;

  constructor(
    private fb: FormBuilder,
    private router:Router,
    private crud: TareasService,
    private activeRouter: ActivatedRoute,
    private conexion: BddService
    ) {
      localStorage.getItem('tarea');
      this.editar(localStorage.getItem('i'), localStorage.getItem('tarea'))
    }


    editar(i: any, dato: any){
      this.Index = i;
      this.Formulario.patchValue(JSON.parse(dato));
    }

    guardarEditado(){
      if (!this.Formulario.valid) {
        return;
      }
      this.crud.actualizarDato(this.Formulario.value, this.Index);
      this.Index = -1;
      this.Formulario.reset();
      this.router.navigate(['tareas']);
    }

    campoEsValido(campo: string) {
      return this.Formulario.controls[campo].errors && this.Formulario.controls[campo].touched;
    }
    
    /* Cambios Brandon */
    Actualizar() {
      if (this.Formulario.touched) {
        this.conexion.post('', '', this.Formulario.value).subscribe((dato: any) => {
          if (dato['estatus']) {
            this.router.navigate(['/tareas']);
          }
          console.log(dato);
  
        });
      }
    }

}
