import { Component, OnInit } from '@angular/core';
import { user } from '../models/usuario.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuario: user;

  constructor() { 
    this.usuario ={
      usuario:null,
      contrasena:null
    }
    console.log(this.usuario)
  }

  ngOnInit() {
  }

}
