import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BddService } from '../services/bdd.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // Lista: any = [
  //   { correo: "tom@gmail.com", pass: "123456" }
  // ];

  Formulario: FormGroup = this.fb.group({
    correo: [, [Validators.required, Validators.email]],
    pass: [, Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router, private conexion: BddService) {

  }

  // insertsIniciales(){
    //   if(localStorage.getItem("tareas", JSON.stringify(this.tareas)) !== null){

      //   }
      // }

  Login() {

    // if(localStorage.getItem('tareas') == null || localStorage.getItem('tareas') == 'null'){
    //   localStorage.setItem("tareas", JSON.stringify(this.tareas));
    // }

    // if (this.Formulario.controls["correo"].value == this.Lista[0].correo && this.Formulario.controls["pass"].value == this.Lista[0].pass) {
    //   console.log("exitoso");

    //   this.router.navigate(['/tareas']);

    // } else {

    //   alert("Usuario no encontrado")

    // }

    this.conexion.Post('tareas','login',this.Formulario.value).subscribe((dato: any) => {
      console.log(dato);
      
      if(dato.id != 0){
        this.router.navigate(['/tareas']);
      }
      else{
        alert("Usuario no encontrado")
      }
    })




  }

}
