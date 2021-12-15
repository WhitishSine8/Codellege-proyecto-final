import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlAPI = "https://jsonplaceholder.typicode.com";

  constructor() { }
}
