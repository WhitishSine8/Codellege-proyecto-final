import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { FotosModel } from 'src/app/models/fotos.model';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json',
  })
}
@Injectable()
export class FotosService {
  private photosUrl: string = 'https://jsonplaceholder.typicode.com/photos';
  constructor(
    private http: HttpClient
  ) { }

  getFotos(): Observable<FotosModel[]> {
    return this.http.get<FotosModel[]>(this.photosUrl)
  }

}