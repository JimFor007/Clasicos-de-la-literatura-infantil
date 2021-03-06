import { Component, OnInit } from '@angular/core';
import { TestService } from '../Services/test.service';
import { author } from '../models/author.model';
import {AngularFirestore} from '@angular/fire/firestore'
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { CookieService } from 'ngx-cookie';
import{Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

authors: author[];
email: string;

name: string;

prueba: any;
key:string;
keyUser = '&I%U%$234';


  constructor(private router: Router,private _cookieService: CookieService,public toastController: ToastController,public loadingController: LoadingController,private test: TestService, db: AngularFirestore,public alertController: AlertController) {
    this.key = this._cookieService.get(this.keyUser);        
    this.Verifiacion(this.key);
  
  }

  ngOnInit() {
    setTimeout(() => {
      this.key = this._cookieService.get(this.keyUser);
    }, 3000);
  }

  playVideo(){
    /*this.videoPlayer.play('../../../assets/videos/Orientacion.mp4').then(() => {
    console.log('video completed');
    }).catch(err => {
    console.log(err);
    });*/
    window.open("https://youtu.be/hfOcnTU6LXQ", '_system');
  }

  async presentToast(message:string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000
      });
    toast.present();
   }


  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Cargando...'
    });
    await loading.present();

    
 
      if(this._cookieService.get(this.keyUser) === null || this._cookieService.get(this.keyUser) === undefined){
        loading.dismiss();
        this.authFailed();
      }else{
      loading.dismiss();
    this.presentAlertConfirm();
      }

  }

  async Verifiacion(key:string) {

    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Verificando Usuario...'
    });
    await loading.present();

    if(key == '' || key == undefined || key == null){
      this.email = null;
      loading.dismiss();
    }
    else{
      this.email=key;
      loading.dismiss()
    }





   /* this.test.stateUser().subscribe(data=>{
      if(data === null){this.email = null;
        loading.dismiss();
    }
      else{
      this.email = data.email;
      loading.dismiss();

      }
    }
    ); */

    /*this.prueba = this.test.stateUser();
    console.log(this.prueba);
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Verificando Usuario...'
    });
    await loading.present();

    this.test.stateUser().subscribe(data=>{
      if(data === null){this.email = null;
        loading.dismiss();
    }
      else{
      this.email = data.email;
      loading.dismiss();

      }
    }
    ); */
  }



  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿Seguro que desea cerrar sesion?',
      message: 'se cerrara la sesion de <strong>'+this.email+'</strong>, deberá iniciar sesion nuevamente',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            this.presentToast('Cerraste sesion, Vuelve pronto!!');
            this.logOut();
          }
        }
      ]
    });

    await alert.present();
  }

  async authFailed() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Usted no esta autenticado',
      message: 'No se puede cerrar sesion si no esta autenticado.',
      buttons: [
       {
          text: 'Confirmar',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }

  redirect(){
    
  }
  logOut(){
    this.ngOnInit();
    this.test.logout();
  }
  loginpr(){
    this.router.navigate(['/login'])
  }

}
