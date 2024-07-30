import { HttpClient } from '@angular/common/http';
import { Injectable, importProvidersFrom } from '@angular/core';
import { Cliente } from '../utilitarios/modelos/Cliente';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://epico.gob.ec/vehiculo/public/api/";


  getUsers(filtro?: string, rows?: number, page?: number): Observable<Cliente> {
    let body = new HttpParams();
    body = filtro ? body.set('filtro', filtro) : body;
    body = rows ? body.set('rows', rows) : body;
    body = page ? body.set('page', page) : body;


    return this.http.get<Cliente>(this.baseUrl + "clientes/", { params: body });
  }

  getUserById(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(this.baseUrl + id)
  }


  addUser(id: Clientet) {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    return this.http.post<Cliente>(this.baseUrl + "cliente/", id, httpOptions)
  }


  updateUser(id: Clientet, nuevosdatos: any): Observable<Cliente> {
    return this.http.put<Cliente>(this.baseUrl + "cliente/" + id, nuevosdatos)
  }

  eliminarusuario(id: Clientet): Observable<Cliente> {
    return this.http.delete<Cliente>(this.baseUrl + "cliente/" + id)
  }


  private ListaClientes: Array<Clientet> = [
    { "id": "A001", "nombre": "PATRICIA", "apellido": "ACURIO", "password": "PACURIO24", "telefono": "3171426", "email": "pacurio@hotmail.com" },
    { "id": "A002", "nombre": "KATY", "apellido": "CORONEL", "password": "KCORONEL24", "telefono": "3171426", "email": "kcoronel@hotmail.com" },
    { "id": "A003", "nombre": "MELISSA", "apellido": "CONDOR", "password": "MCONDOR24", "telefono": "3171226", "email": "mcondor@hotmail.com" },
    { "id": "A004", "nombre": "LUCIA", "apellido": "MONTES", "password": "LMONTES24", "telefono": "2172426", "email": "lmontes@hotmail.com" },
    { "id": "A005", "nombre": "ANDRES", "apellido": "CABRERA", "password": "ACABRERA24", "telefono": "2231536", "email": "acabrera@hotmail.com" },
    { "id": "A006", "nombre": "SARAHI", "apellido": "AGUILAR", "password": "SAGUILAR24", "telefono": "3171426", "email": "saguilar@hotmail.com" },

  ];
}

export interface Cliente {
  codigo: string,
  mensaje: string,
  data: any,
  rows: number,
  pages: number,
  records: number,
  page: number,
}



