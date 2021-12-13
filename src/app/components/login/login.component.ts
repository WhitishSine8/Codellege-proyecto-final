import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent{

  constructor(private router: Router) { }

  miFormulario = new FormGroup({
    usuario: new FormControl("Admin", Validators.required),
    contraseña: new FormControl("12345", Validators.required)
  })

  Login() {
    const usuarioLogin = {
      usuario: this.miFormulario.value.usuario,
      password: this.miFormulario.value.password,
    };
    if (usuarioLogin.usuario = 'Admin' && usuarioLogin.password === '12345') {
      this.router.navigate(['/home']);
    }
    else {
		//Tenes que poner un mensaje de error 
    }
  }
}
