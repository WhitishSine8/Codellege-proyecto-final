import { Component, OnInit } from '@angular/core';

// Model
import { UsuarioModel } from 'src/app/models/usuarios.model';

// Service
import { UsuarioService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-user',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  users: UsuarioModel[]
  constructor(
    private usuarioService: UsuarioService
   ) { }
  
  getUsers(): void {
    this.usuarioService.getUsers()
      .subscribe(users => this.users = users)
  }

  ngOnInit() {
    this.getUsers()
  }

}