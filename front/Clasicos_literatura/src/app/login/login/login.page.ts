import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { TestService } from 'src/app/Services/test.service';
import{Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string
  password:string

  constructor(private alertController: AlertController, private auth: TestService, private Router: Router) { }

  login(){
    this.auth.login(this.email,this.password).then(res=>{
      this.Router.navigate(['/index'])
    }).catch()
    
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error de autenticación',
      message: 'Usuario o contraseña incorrectos',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
