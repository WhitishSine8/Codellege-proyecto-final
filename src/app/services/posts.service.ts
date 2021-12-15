import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PostsModel } from '../models/posts.model';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json; charset=UTF-8',
  })
}

@Injectable()
export class PostsService {
  private postsUrl: string ='https://jsonplaceholder.typicode.com/posts';
  constructor(
    private http: HttpClient,
  ) { }

  getPost(id: number): Observable<PostsModel> {
    return this.http.get<PostsModel>(`${this.postsUrl}/${id}`)
  }

  getPosts(): Observable<PostsModel[]> {
    return this.http.get<PostsModel[]>(`${this.postsUrl}?_sort=views&_order=desc`)
  }

  addPost(post: PostsModel): Observable<PostsModel> {
    return this.http.post<PostsModel>(this.postsUrl, post, httpOptions) 
  }

}