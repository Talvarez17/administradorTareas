import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  Lista: any = [
    { correo: "tom@gmail.com", pass: "123456" }
  ];

  Formulario: FormGroup = this.fb.group({
    correo: [, [Validators.required, Validators.email]],
    pass: [, Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router) {
  }



  Login() {

    if (this.Formulario.controls["correo"].value == this.Lista[0].correo && this.Formulario.controls["pass"].value == this.Lista[0].pass) {
      console.log("exitoso");

      this.router.navigate(['/agregar']);

    } else {

      alert("Usuario no encontrado")

    }


  }

}
