import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ComentariosModel } from 'src/app/models/comentarios.model';

// Model
import { PostsModel } from 'src/app/models/posts.model';
import { UsuarioModel } from 'src/app/models/usuarios.model';
// import { ComentariosModel } from 'src/app/models/comentarios.model';

// Service
import { PostsService } from 'src/app/services/posts.service';
import { UsuarioService } from 'src/app/services/usuarios.service';
import { ComentariosService } from 'src/app/services/comentarios.service';
@Component({
  selector: 'app-post-display',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {

  posts: PostsModel[];
  users: UsuarioModel[];
  comments: ComentariosModel[]

  constructor(
    private postsService: PostsService,
    private usuarioService: UsuarioService,
    private comentariosService: ComentariosService
  ) {
    this.getPosts()
    this.getComments()
  }

  getPosts() {
    this.postsService.getPosts()
      .subscribe( posts => {this.posts = posts; this.setUserName()} )
    this.usuarioService.getUsers()
      .subscribe( users => {this.users = users; this.setUserName()})
    console.log(this.posts)
  }

  setUserName() {
    if (this.posts && this.users) {
      for(const post of this.posts) {
        for(const user of this.users) {
          if (post.userId === user.id) {
            post.name = user.name
          }
        }
      }
    }
  }

  getComments(): void {
    this.comentariosService.getComments()
      .subscribe(comments => this.comments = comments)
  }

  ngOnInit() {
    // this.getComments()
  }


}