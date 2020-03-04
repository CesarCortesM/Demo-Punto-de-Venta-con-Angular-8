import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form_login: boolean = true;
  public form_registro: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  mostrarFormRegistro() {
    this.form_login = false;
    this.form_registro = true;
  }

  ocultarFormRegistro() {
    this.form_login = true;
    this.form_registro = false;
  }

}
