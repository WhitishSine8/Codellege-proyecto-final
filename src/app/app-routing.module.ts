//Importes de angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importes internos
import { AlbumsComponent } from './components/albums/albums.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { PostsComponent } from './components/posts/posts.component';
import { HomeComponent } from './components/home/home.component'
import { CommentComponent } from './components/comentarios/comentarios.componente';
import { UsuarioComponent } from './components/usuarios/usuario/usuario.component';

const routes: Routes = [
  { path: "home", component: HomeComponent},
  // { path: "**", component: PublicPageComponent }
  // { path: "login", component: LoginComponent },
  { path: "albums", component: AlbumsComponent},
  { path: "fotos", component: FotosComponent},
  { path: "usuarios", component: UsuariosComponent},
  { path: "publicaciones", component: PostsComponent},
  { path: '', pathMatch: 'full', redirectTo: 'publicaciones' },
  { path: "comentarios", component: CommentComponent},
  { path: "usuario", component: UsuarioComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
