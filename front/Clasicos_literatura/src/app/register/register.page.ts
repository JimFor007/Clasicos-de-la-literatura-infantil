import { Component, OnInit } from '@angular/core';
import { user } from '../models/usuario.model';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { TestService } from '../Services/test.service';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { author } from '../models/author.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuario: user;
  registrado:false;
  todoslibros: author[];

  loginForm = new FormGroup({
    userEmail: new FormControl('',Validators.email),
    });

  loginFormValidator = {
    userEmail: {
    empty: '',
    email: '',
    }
  };
  
  constructor(public loadingController: LoadingController,private auth: AngularFireAuth, private service: TestService, public toastController: ToastController) { 
    this.usuario ={
      correo:null,
      contrasena:null
    }
    console.log(this.usuario)
  }

  ngOnInit() {
  }
  async presentLoading(uid: string) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Registrando usuario'
    });
    await loading.present();
    
    this.service.getTodos().subscribe(
      data=>{
        this.todoslibros = data;      
          this.service.postUserDoc(uid,this.todoslibros);
          this.presentToast('Usuario Creado exitosamente');
          loading.dismiss();
      }
    )
  }

  validar(){
    this.usuario.correo= this.loginForm.value.userEmail;
    console.log(this.usuario);

    this.service.createUser(this.usuario.correo,this.usuario.contrasena).then(data=>{
      this.presentLoading(data.user.uid);
    },
    err=>{
        this.presentToast('Usuario existente, pruebe con otro correo ');
    });
      }

  async presentToast(message:string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000
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
