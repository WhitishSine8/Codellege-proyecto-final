//Módulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import { IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Componentes internos
import { AlbumsComponent } from './components/albums/albums.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { HomeComponent } from './components/home/home.component';

//Servicios
import { UsuarioService } from './services/usuarios.service';
import { PostsService } from './services/posts.service';
import { ComentariosService } from './services/comentarios.service';
import { UsuarioComponent } from './components/usuarios/usuario/usuario.component';
import { FotosService } from './services/fotos.service';


export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: "141cdeb6-6e87-40f1-9052-da07858a06e0",
      redirectUri: "http://localhost:4200"
    }
  })
}
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MsalModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    AlbumsComponent,
    FotosComponent,
    UsuariosComponent,
    UsuarioComponent,
    PostsComponent,
    HomeComponent,
    UsuarioComponent
  ],
  
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    MsalService,
    UsuarioService,
    PostsService,
    ComentariosService,
    FotosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
