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
    id:[],
    titulo: [, [Validators.required, Validators.maxLength(99)]],
    descripcion: [, [Validators.required, Validators.maxLength(255)]],
    fecha: [, Validators.required],
    estado: [,Validators.required]
  });

  // tareas: any = [];
  // Index = -1;

  constructor(private fb: FormBuilder,private router:Router,private crud: TareasService, private activeRouter: ActivatedRoute,private conexion: BddService) {
      // localStorage.getItem('tarea');
      
      const id = this.activeRouter.snapshot.params['id'];
      console.log(id);
      
      this.obtenerRegistro(id);
      // this.editar(localStorage.getItem('i'), localStorage.getItem('tarea'))
    }


    // editar(i: any, dato: any){
    //   this.Index = i;
    //   this.Formulario.patchValue(JSON.parse(dato));
    // }

    // guardarEditado(){
    //   if (!this.Formulario.valid) {
    //     return;
    //   }
    //   this.crud.actualizarDato(this.Formulario.value, this.Index);
    //   this.Index = -1;
    //   this.Formulario.reset();
    //   this.router.navigate(['tareas']);
    // }

    campoEsValido(campo: string) {
      return this.Formulario.controls[campo].errors && this.Formulario.controls[campo].touched;
    }


    obtenerRegistro(id: any) {
      this.conexion.Post('tareas', 'getId', { 'id': id }).subscribe((dato: any) => {
        console.log(dato);
        // this.tareas = dato;
        this.Formulario.patchValue({
  
          id: dato[0].id,
          titulo: dato[0].titulo,
          descripcion: dato[0].descripcion,
          fecha: dato[0].fechaVencimiento,
          estado: dato[0].estado
        });
      });
  
    }
    
    /* Cambios Brandon */
    actualizar() {
      if (this.Formulario.touched) {
        this.conexion.Post('tareas', 'update', this.Formulario.value).subscribe((dato: any) => {
          this.router.navigate(['/tareas']);
          console.log(dato);
  
        });
      }
    }

}
