import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { FotosModel } from '../models/fotos.model';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json',
  })
}
@Injectable()
export class PhotosService {
  private photosUrl: string = 'https://jsonplaceholder.typicode.com/photos';
  constructor(
    private http: HttpClient
  ) { }

  getPhotos(): Observable<FotosModel[]> {
    return this.http.get<FotosModel[]>(this.photosUrl)
  }

}