import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule, NavigationExtras, RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  // miFormulario = new FormGroup({
  //   usuario: new FormControl("Admin", Validators.required),
  //   contraseña: new FormControl("12345", Validators.required)
  // })
  ngOnInit(): void {
      
  }

  constructor(public router: Router) { }
  usuario = new FormControl();
  password = new FormControl();
  

  logIn() {
    // const usuarioLogin = {
    //   usuario: this.miFormulario.value.usuario,
    //   password: this.miFormulario.value.password,
    // };
    if (this.usuario.value == 'admin' && this.password.value == '123') {
      this.router.navigate(['/publicaciones'], );
      // this.router.navigateByUrl('../home')
    }
    else {
      alert("Nombre de usuario o contraseña incorrectos")
    }
  }
}
