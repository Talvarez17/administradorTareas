import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasComponent } from './tareas/tareas.component';

const routes: Routes = [
  { path: 'tareas', component: TareasComponent, },


  // {
  //   path: 'auth',
  //   loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  // },
  // { path: '**', redirectTo: 'auth' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
