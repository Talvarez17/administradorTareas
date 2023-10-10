import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {

  tareas: any[] = [];


  tareasFiltradas: any[] = [];

  formulario = this.fb.group({
    filtro: 'Todas',
  });

  constructor(
    private fb: FormBuilder,
    private router: Router
    ){
      this.tareas = JSON.parse(localStorage.getItem('tareas') || '{}');
      this.tareas = this.tareas.reverse();
      this.filtrarTareas();
 }

 verTarea(idTarea: any){
  localStorage.setItem("idTarea", this.tareas.indexOf(idTarea).toString());
 }

 eliminarTarea(idTarea: any){
  this.tareas.splice(this.tareas.indexOf(idTarea), 1);
  localStorage.setItem("tareas", JSON.stringify(this.tareas));
 }

 filtrarTareas(){
  if (this.formulario.controls.filtro.value == "Todas") {
    this.tareasFiltradas = this.tareas;
  }else{
    this.tareasFiltradas = this.tareas.filter(e => e.estado.includes(this.formulario.controls.filtro.value));
  }

 }


}
