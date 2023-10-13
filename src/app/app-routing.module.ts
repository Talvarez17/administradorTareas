import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasComponent } from './tareas/tareas.component';
import { AgregarComponent } from './agregar/agregar.component';
import { LoginComponent } from './login/login.component';
import { VerComponent } from './ver/ver.component';
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'login',    component: LoginComponent},
      {path: 'agregar',    component: AgregarComponent},
      {path: 'ver/:i',    component: VerComponent},
      {path: 'editar/:i',    component: EditarComponent},
      { path: 'tareas', component: TareasComponent, },
      { path: '**',      redirectTo: 'tareas' }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
