import { Component } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {

  tareas: any[] = [
    {idTarea: "1", titulo: "Tarea 1", descripcion: "Descripción 1", fecha: "06-10-2023", estado: "Pendiente"},
    {idTarea: "2", titulo: "Tarea 1", descripcion: "Descripción 1", fecha: "06-10-2023", estado: "Completada"},
    {idTarea: "3", titulo: "Tarea 1", descripcion: "Descripción 1", fecha: "06-10-2023", estado: "Pendiente"},
    {idTarea: "4", titulo: "Tarea 1", descripcion: "Descripción 1", fecha: "06-10-2023", estado: "Completada"},
    {idTarea: "5", titulo: "Tarea 1", descripcion: "Descripción 1", fecha: "06-10-2023", estado: "Pendiente"},
    {idTarea: "6", titulo: "Tarea 1", descripcion: "Descripción 1", fecha: "06-10-2023", estado: "Completada"},
    {idTarea: "7", titulo: "Tarea 1", descripcion: "Descripción 1", fecha: "06-10-2023", estado: "Pendiente"},
    {idTarea: "8", titulo: "Tarea 1", descripcion: "Descripción 1", fecha: "06-10-2023", estado: "Completada"},
    {idTarea: "9", titulo: "Tarea 1", descripcion: "Descripción 1", fecha: "06-10-2023", estado: "Pendiente"},
    {idTarea: "10", titulo: "Tarea 1", descripcion: "Descripción 1", fecha: "06-10-2023", estado: "Completada"},
    {idTarea: "11", titulo: "Tarea 1", descripcion: "Descripción 1", fecha: "06-10-2023", estado: "Pendiente"}
  ];

  tareasFiltradas: any[] = [];

  filtro: string = "Pendiente";

 constructor(){
  console.log(this.filtro);
  console.log(this.tareas[0].estado);
 }

 verTarea(idTarea: string){
  localStorage.setItem("idTarea", idTarea);
 }

 filtrarTareas(){
  this.tareas.filter(e => e.estado.includes(this.filtro))
 }


}
