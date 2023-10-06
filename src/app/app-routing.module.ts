import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { LoginComponent } from './login/login.component';
import { VerComponent } from './ver/ver.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'login',    component: LoginComponent},
      {path: 'agregar',    component: AgregarComponent},
      {path: 'ver/:id',    component: VerComponent},
      { path: '**',      redirectTo: 'login' }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
