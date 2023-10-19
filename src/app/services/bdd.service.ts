import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BddService {

  baseUrl = 'http://localhost/adminTareasService/controller/';
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8; Access-Control-Allow-Origin'
    })
  };

  constructor(private http: HttpClient) { }

  Get(Modelo: string, Accion: string) {
    return this.http.get(`${this.baseUrl}${Modelo}.php?opcion=${Accion}`, this.httpOptions);
  }

  Post(Modelo: string, Accion: string, Datos: any) {
    console.log(`${this.baseUrl}${Modelo}.php?opcion=${Accion}`);
    return this.http.post(`${this.baseUrl}${Modelo}.php?opcion=${Accion}`, Datos, this.httpOptions);
  }

}
