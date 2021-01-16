import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { TestService } from 'src/app/Services/test.service';
import{Router} from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CookieService } from 'ngx-cookie';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string;
  password:string;
  keyUser = '&I%U%$234';

  constructor(private _cookieService: CookieService,public loadingController: LoadingController,public toastController: ToastController,private alertController: AlertController, private auth: TestService, private Router: Router) { }
  
  
  ngOnInit() {

    


  }



  async login(email: string, password:string){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Verificando Usuario...'
    });
    await loading.present();
    this.auth.validateUSER(email).then(
      result=>{
        if(result == true){
          this.auth.getUserData(email).subscribe(
            result=>{
              if(result.contrasena == password){
                this._cookieService.put(this.keyUser,email);
                loading.dismiss();
                this.presentToast('Bienvenido '+ email+' !!');
                this.Router.navigate(['/index'])
              }
              else{
                loading.dismiss();
                this.presentToast('Usuario invalido o inexistente, Pruebe de nuevo');
              }
            }
          );
        }else{
          loading.dismiss();
          this.presentToast('Usuario invalido o inexistente, Pruebe de nuevo');
        }
      }
    );
   /* this.auth.login(email,password).then(res=>{
      this.presentToast('Bienvenido '+ email+' !!');
      this.Router.navigate(['/index'])
    }).catch(err =>{
      this.presentToast('Usuario invalido o inexistente, Pruebe de nuevo');
    })*/
    
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

async authnull(){
  const loading = await this.loadingController.create({
    cssClass: 'my-custom-class',
    message: 'Verificando Usuario...'
  });
  await loading.present();
  this._cookieService.remove(this.keyUser);
  loading.dismiss();
    this.Router.navigate(['/index'])
  }

}
