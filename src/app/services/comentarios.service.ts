import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { ComentariosModel } from '../models/comentarios.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
@Injectable()
export class ComentariosService {
  private commentsUrl: string = 'https://jsonplaceholder.typicode.com/comments'
  constructor(
    private http: HttpClient
  ) { }

  getComments(): Observable<ComentariosModel[]>{
    return this.http.get<ComentariosModel[]>(this.commentsUrl)
  }
}