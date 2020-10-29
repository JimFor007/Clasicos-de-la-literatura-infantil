import { Component, OnInit } from '@angular/core';
import { TestService } from '../Services/test.service';
import { author } from '../models/author.model';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore'
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

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


  constructor(public toastController: ToastController,public loadingController: LoadingController,private test: TestService, db: AngularFirestore,public alertController: AlertController) {
    this.Verifiacion();
    /*
    -------//--CON ESTA LINEA SE AGREGA LOS DATOS A FIRESTORE ( IMPORTANTE: DEJARLO COMENTADO POR SI SE LLEGA A BORRAR DEL FIRESTORE) //--------------
    
    this.authors = test.authors;
    console.log(this.authors); 
    for(let i=0 ; i<this.authors.length ; i++){
    db.collection('authors')
                .add(this.authors[i]);
    console.log('posicion' , i , 'agregada');
    }*/

  }

  ngOnInit() {
    this.test.stateUser().subscribe(data=>{
      this.email = data.email;
      this.name=data.displayName
    }); 
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

    
 
      if(this.email === null){
        loading.dismiss();
        this.authFailed();
      }else{
      loading.dismiss();
    this.presentAlertConfirm();
      }

  }

  async Verifiacion() {

    this.prueba = this.test.stateUser();
    console.log(this.prueba);
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Verificando Usuario...'
    });
    await loading.present();
    

    
    loading.dismiss();
    this.presentAlertConfirm();

    this.test.stateUser().subscribe(data=>{
      if(data === null){this.email = null;
        loading.dismiss();
    }
      else{
      this.email = data.email;
      loading.dismiss();

      }
    }
    );

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

  logOut(){
    this.test.logout();
  }

}
