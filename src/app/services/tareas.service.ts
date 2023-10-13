import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private datos: any[] = [];
  constructor() {
    this.cargaDatosLocalStorage();
  }

  agregarDato(dato: any){
    this.datos.push(dato);
    this.guardarDatosEnLocalStorage();
  }

  actualizarDato(dato: any, index: number){
    if(index >= 0 && index < this.datos.length){
      this.datos[index] = dato;
      this.guardarDatosEnLocalStorage();
    }
  }

  eliminarDato(index: number){
    if(index >= 0 && index < this.datos.length){
      this.datos.splice(index, 1);
      this.guardarDatosEnLocalStorage();
    }
  }

  obtenerDatos(){
    return this.datos;
  }

  private guardarDatosEnLocalStorage(){
    localStorage.setItem('tareas', JSON.stringify(this.datos));
  }

  private cargaDatosLocalStorage(){
    const datosString = localStorage.getItem('tareas');

    if (datosString) {
      this.datos = JSON.parse(datosString);
    }
}
}
