import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  Formulario: FormGroup = this.fb.group({
    titulo: [, [Validators.required, Validators.maxLength(99)]],
    descripcion: [, [Validators.required, Validators.maxLength(255)]],
    fecha: [, Validators.required],
    estado: [,Validators.required]   
  });

  constructor(private fb: FormBuilder, private router: Router ) { }

  campoEsValido(campo: string) {
    return this.Formulario.controls[campo].errors && this.Formulario.controls[campo].touched;
  }

  guardar() {
    localStorage.setItem('tarea', JSON.stringify(this.Formulario.value));
    console.log(this.Formulario.value);
  }
    

}

