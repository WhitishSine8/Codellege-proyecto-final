import { Component, OnInit } from '@angular/core';

// Model
import { ComentariosModel } from 'src/app/models/comentarios.model';

// Service
import { ComentariosService } from 'src/app/services/comentarios.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comentarios.component.html',
})
export class CommentComponent implements OnInit {
  comments: ComentariosModel[]
  constructor(
    private comentariosService: ComentariosService
  ) { }

  getComments(): void {
    this.comentariosService.getComments()
      .subscribe(comments => this.comments = comments)
  }

  ngOnInit() {
    this.getComments()
  }

}