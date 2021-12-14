import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule, NavigationExtras, RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }

  miFormulario = new FormGroup({
    usuario: new FormControl("Admin", Validators.required),
    contraseña: new FormControl("12345", Validators.required)
  })

  usuario = new FormControl();
  password = new FormControl();

  logIn() {
    // const usuarioLogin = {
    //   usuario: this.miFormulario.value.usuario,
    //   password: this.miFormulario.value.password,
    // };
    console.log(this.usuario.value);
    console.log(this.usuario.value)
    if (this.usuario.value == 'admin' && this.password.value === '123') {
      this.router.navigate(['/home'], );
      // this.router.navigateByUrl('../home')
    }
    else {
      alert("Nombre de usuario o contraseña incorrectos")
    }
  }
}
