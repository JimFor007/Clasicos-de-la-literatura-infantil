import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TestService } from '../Services/test.service';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { ToastController } from '@ionic/angular';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  keyUser = '&I%U%$234';

  constructor(private _cookieService: CookieService,private toastController:ToastController ,private service: TestService, private router: Router){}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      

        if(this._cookieService.get(this.keyUser) == '' || this._cookieService.get(this.keyUser) == undefined || this._cookieService.get(this.keyUser) == null){
          return true;
        }
        else{
          this.presentToast('Ya estas logueado con '+this._cookieService.get(this.keyUser) +' , Bienvenido de nuevo!');
          this.router.navigate(['/index']);
          return false;
        }


    /*  return this.service.stateUser().pipe(map(auth=>{

        if(isNullOrUndefined(auth)){
          return true;
        }
        else{
          this.presentToast('Ya estas logueado con '+auth.email +' , Bienvenido de nuevo!');
          this.router.navigate(['/index']);
          return false;
        }
      }));*/
  }

  async presentToast(message:string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000
      });
    toast.present();
   }
}
