//Importes de angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaslGuard } from './masl.guard';

//Importes internos
import { LoginComponent } from './components/login/login.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  // { path: "**", component: PublicPageComponent }
  { path: "login", component: LoginComponent },
  { path: "albums", component: AlbumsComponent},
  { path: "fotos", component: FotosComponent},
  { path: "usuarios", component: UsuariosComponent},
  { path: "home", component: HomeComponent},
  { path: "publicaciones", component: PostsComponent},
  { path: '', pathMatch: 'full', redirectTo: 'login' }
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
