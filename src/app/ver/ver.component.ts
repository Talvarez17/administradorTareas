import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent {

  Formulario: FormGroup = this.fb.group({
    id: [,],
    titulo: [, [Validators.required, Validators.maxLength(99)]],
    descripcion: [, [Validators.required, Validators.maxLength(255)]],
    fecha: [, Validators.required],
    estado: [,Validators.required]   
  });

  constructor(private fb: FormBuilder) { }



  obtenerRegistro() {
    

  }

}
