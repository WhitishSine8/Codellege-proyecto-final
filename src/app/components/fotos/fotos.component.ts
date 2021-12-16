import { Component, OnInit } from '@angular/core';
import { FotosModel } from 'src/app/models/fotos.model';
import { PostsModel } from 'src/app/models/posts.model';
import { UsuarioModel } from 'src/app/models/usuarios.model';
import { FotosService } from 'src/app/services/fotos.service';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit{

  fotos: FotosModel[];
  posts: PostsModel[];
  usuarios: UsuarioModel[];
  
  constructor( 
    private FotosService: FotosService
    ) { }

  setUserName() {
    if (this.posts && this.usuarios) {
      for(const post of this.posts) {
        for(const user of this.usuarios) {
          if (post.userId === user.id) {
            post.name = user.name
          }
        }
      }
    }
  }

  getFotos():void {
    this.FotosService.getFotos()
    .subscribe(fotos => this.fotos = fotos)
  }

  ngOnInit() {
    this.getFotos()
  }
}
