import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TestService } from 'src/app/Services/test.service';
import{Router} from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string
  password:string

  constructor(public toastController: ToastController,private alertController: AlertController, private auth: TestService, private Router: Router) { }

  login(email: string, password:string){  
    this.auth.login(email,password).then(res=>{
      this.presentToast('Bienvenido');
      this.Router.navigate(['/index'])
    }).catch(err =>{
      this.presentToast('Usuario invalido o inexistente, Pruebe de nuevo');
    })
    
  }

  async presentToast(message:string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000
      });
    toast.present();
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
