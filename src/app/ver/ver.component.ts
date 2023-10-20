import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BddService } from '../services/bdd.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent {

  Formulario: FormGroup = this.fb.group({
    id:[],
    titulo: [, [Validators.required, Validators.maxLength(99)]],
    descripcion: [, [Validators.required, Validators.maxLength(255)]],
    fecha: [, Validators.required],
    estado: [,Validators.required]
  });

 

  constructor(private fb: FormBuilder, private activeRouter: ActivatedRoute,private conexion: BddService) {
      
      const id = this.activeRouter.snapshot.params['id'];
      console.log(id);
      
      this.obtenerRegistro(id);
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
    

}
