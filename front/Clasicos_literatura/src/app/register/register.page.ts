import { Component, OnInit } from '@angular/core';
import { user } from '../models/usuario.model';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { TestService } from '../Services/test.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuario: user;
  registrado:false;

  loginForm = new FormGroup({
    userEmail: new FormControl('',Validators.email),
    });

  loginFormValidator = {
    userEmail: {
    empty: '',
    email: '',
    }
  };
  
  constructor(private auth: AngularFireAuth, private service: TestService, public toastController: ToastController) { 
    this.usuario ={
      correo:null,
      contrasena:null
    }
    console.log(this.usuario)
  }

  ngOnInit() {
  }


  validar(){
    this.usuario.correo= this.loginForm.value.userEmail;
    console.log(this.usuario);

    this.service.createUser(this.usuario.correo,this.usuario.contrasena).then(data=>{
      console.log("Usuario creado")
    },
    err=>{
        this.presentToast();
    });
      }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Usuario existente, pruebe con otro correo ',
      duration: 2000
      });
    toast.present();
   }

   estadosForm(estado:FormGroup){
    if(!estado){
      return 0;
    }
    else{
      return 1;
    }
   }

   estadosPass(pass:string){

      if(pass===null || pass.length <=5){
          return 0;
      }
      else{
        return 1;
      }


   }
}
