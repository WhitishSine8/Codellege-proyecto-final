import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { UsuarioModel } from '../models/usuarios.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable()
export class UsuarioService {
  private usersUrl: string = 'https://jsonplaceholder.typicode.com/users';
  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>(this.usersUrl)
  }

  getUser(id: number): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(`${this.usersUrl}/${id}`)
  }
}