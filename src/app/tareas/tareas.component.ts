import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { TareasService } from '../services/tareas.service';
import { BddService } from '../services/bdd.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent {
  tareas: any[] = [];
  Index = -1;

  tareasDB: any;

  tareasFiltradas: any[] = [];

  formulario = this.fb.group({
    filtro: 'Todas',
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private crud: TareasService,
    private conexion: BddService
  ) {
    this.tareas = JSON.parse(localStorage.getItem('tareas') || '{}');
    // this.tareas = this.tareas.reverse();
    this.filtrarTareas();
    this.tareas = this.crud.obtenerDatos();
    this.ObtenerTareas()
  }

  eliminar(i: any) {
    this.crud.eliminarDato(i);
    this.filtrarTareas();
  }

  actualizarTarea(i: any, tarea: any) {
    localStorage.setItem('tarea', this.tareas.indexOf(tarea).toString());
    localStorage.setItem('tarea', JSON.stringify(tarea));
    localStorage.setItem('i', JSON.stringify(i));
    localStorage.getItem('tarea');
    this.router.navigate(['/editar/:']);
  }

  //  verTarea(idTarea: any){
  //   localStorage.setItem("idTarea", this.tareas.indexOf(idTarea).toString());
  //  }

  //  eliminarTarea(idTarea: any){
  //   this.tareas.splice(this.tareas.indexOf(idTarea), 1);
  //   localStorage.setItem("tareas", JSON.stringify(this.tareas));
  //  }

  filtrarTareas() {
    if (this.formulario.controls.filtro.value == 'Todas') {
      this.tareasFiltradas = this.tareas;
    } else {
      this.tareasFiltradas = this.tareas.filter((e) =>
        e.estado.includes(this.formulario.controls.filtro.value)
      );
    }
  }

  EliminarCuenta(id: any) {
    this.conexion.Post('tareas', 'delete', id ).subscribe((dato: any) => {
      console.log(dato);
      if (dato['estatus']) {

      }
    });
  }

  ObtenerTareas() {
    this.conexion.Get('tareas', 'getAll').subscribe((info: any) => {
      this.tareasDB = info;
      console.log(this.tareasDB);
      
    })
  }
}
