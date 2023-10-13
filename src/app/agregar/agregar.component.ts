import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { TareasService } from '../services/tareas.service';

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

  tareas: any[] = [];

  constructor(
    private fb: FormBuilder,
    private router:Router,
    private crud: TareasService
    ) {
      // this.Datos = this.crud.obtenerDatos();
    }

  campoEsValido(campo: string) {
    return this.Formulario.controls[campo].errors && this.Formulario.controls[campo].touched;
  }

  guardar(){
    if (!this.Formulario.valid) {
      return;
    }
    this.crud.agregarDato(this.Formulario.value);
    this.Formulario.reset();
    this.router.navigate(['tareas']);
  }

  guardar2() {
    this.tareas = JSON.parse(localStorage.getItem('tareas') || '{}');
    this.tareas.push(this.Formulario.value);

    localStorage.setItem('tareas', JSON.stringify(this.tareas));

    this.router.navigate(['tareas']);
  }

}

