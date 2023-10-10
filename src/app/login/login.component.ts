import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  tareas: any[] = [
    {titulo: "Tarea 1", descripcion: "Descripción 1", fecha: "06-10-2023", estado: "Pendiente"},
    {titulo: "Tarea 1", descripcion: "Descripción 1", fecha: "06-10-2023", estado: "Completada"},
    {titulo: "Tarea 1", descripcion: "Descripción 1", fecha: "06-10-2023", estado: "Pendiente"},
    {titulo: "Tarea 1", descripcion: "Descripción 1", fecha: "06-10-2023", estado: "Completada"},
    {titulo: "Tarea 1", descripcion: "Descripción 1", fecha: "06-10-2023", estado: "Pendiente"},
    {titulo: "Tarea 1", descripcion: "Descripción 1", fecha: "06-10-2023", estado: "Completada"},
    {titulo: "Tarea 1", descripcion: "Descripción 1", fecha: "06-10-2023", estado: "Pendiente"},
    {titulo: "Tarea 1", descripcion: "Descripción 1", fecha: "06-10-2023", estado: "Completada"},
    {titulo: "Tarea 1", descripcion: "Descripción 1", fecha: "06-10-2023", estado: "Pendiente"},
    {titulo: "Tarea 1", descripcion: "Descripción 1", fecha: "06-10-2023", estado: "Completada"},
    {titulo: "Tarea 1", descripcion: "Descripción 1", fecha: "06-10-2023", estado: "Pendiente"}
   ];

  Lista: any = [
    { correo: "tom@gmail.com", pass: "123456" }
  ];

  Formulario: FormGroup = this.fb.group({
    correo: [, [Validators.required, Validators.email]],
    pass: [, Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router) {

  }

  // insertsIniciales(){
    //   if(localStorage.getItem("tareas", JSON.stringify(this.tareas)) !== null){

      //   }
      // }

  Login() {

    if(localStorage.getItem('tareas') == null || localStorage.getItem('tareas') == 'null'){
      localStorage.setItem("tareas", JSON.stringify(this.tareas));
    }



    if (this.Formulario.controls["correo"].value == this.Lista[0].correo && this.Formulario.controls["pass"].value == this.Lista[0].pass) {
      console.log("exitoso");

      this.router.navigate(['/tareas']);

    } else {

      alert("Usuario no encontrado")

    }


  }

}
