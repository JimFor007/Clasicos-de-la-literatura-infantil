import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TestService } from '../Services/test.service';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{


  constructor(private toastController:ToastController ,private service: TestService, private router: Router){}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      return this.service.stateUser().pipe(map(auth=>{

        if(isNullOrUndefined(auth)){
          return true;
        }
        else{
          this.presentToast('Ya estas logueado con '+auth.email +' , Bienvenido de nuevo!');
          this.router.navigate(['/index']);
          return false;
        }
      }));
  }

  async presentToast(message:string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000
      });
    toast.present();
   }
}
