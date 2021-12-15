// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router'

// // Model
// // import { PostsModel } from 'src/app/models/posts.model';
// // import { UsuarioModel } from 'src/app/models/usuario.model';
// // import { PostsService } from '../../services/posts.service';
// // import { UsuarioService } from 'src/app/services/usuario.service';

// @Component({
//   selector: 'app-posts',
//   templateUrl: './posts.component.html',
//   styleUrls: ['./posts.component.css']
// })
// export class PostsComponent {

//   // posts: PostsModel[];
//   // users: UsuarioModel[];

//   constructor()
//     // private postsService: PostsService,
//     // private usuarioService: UsuarioService
//   // ) {
//   //   this.getPosts()
//   // }

//   // getPosts() {
//   //   this.postsService.getPosts()
//   //     .subscribe( posts => {this.posts = posts; this.setUserName()} )
//   //   this.usuarioService.getUsers()
//   //     .subscribe( users => {this.users = users; this.setUserName()})
//   //   console.log(this.posts)
//   // }

//   // setUserName() {
//   //   if (this.posts && this.users) {
//   //     for(const post of this.posts) {
//   //       for(const user of this.users) {
//   //         if (post.userId === user.id) {
//   //           post.name = user.name
//   //         }
//   //       }
//   //     }
//   //   }
//   // }

// }
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}