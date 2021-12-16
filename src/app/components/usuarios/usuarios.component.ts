import { Component, OnInit } from '@angular/core';

// Model
import { UsuarioModel } from 'src/app/models/usuarios.model';

// Service
import { UsuarioService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-user',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  users: UsuarioModel[]
  constructor(
    private usuariosService: UsuarioService
   ) { }
  
  getUsers(): void {
    this.usuariosService.getUsers()
      .subscribe(users => this.users = users)
  }

  ngOnInit() {
    this.getUsers()
  }



}