import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaslGuard } from './masl.guard';
import { LoginComponent } from './components/login/login.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [
  // { path: "**", component: PublicPageComponent }
  { path: "login", component: LoginComponent },
  { path: "albums", component: AlbumsComponent},
  { path: "fotos", component: FotosComponent},
  { path: "usuarios", component: UsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
