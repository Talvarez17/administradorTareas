import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'agregar',    component: AgregarComponent},
      { path: '**',      redirectTo: 'agregar' }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
