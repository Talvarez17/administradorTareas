import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  Formulario: FormGroup = this.fb.group({
    id: this.contador(),
    titulo: [, [Validators.required, Validators.maxLength(99)]],
    descripcion: [, [Validators.required, Validators.maxLength(255)]],
    fecha: [, Validators.required],
    estado: [,Validators.required]   
  });

  constructor(private fb: FormBuilder) { }

  campoEsValido(campo: string) {
    return this.Formulario.controls[campo].errors && this.Formulario.controls[campo].touched;
  }


  guardar() {

    // console.log(this.Formulario.value);
    localStorage.setItem('tarea', JSON.stringify(this.Formulario.value));
    this.contador()
       
  }

  contador(){
    contador= contador + 1;
    console.log(contador);
    return contador;
  }    

}
let contador = 12

