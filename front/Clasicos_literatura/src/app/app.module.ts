import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import {IonicStorageModule} from '@ionic/storage';
import { LecturaPipe } from './lectura.pipe';
import {PipesModule} from './pipes/pipes.module';

import { AngularFireModule } from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent, LecturaPipe],
  entryComponents: [],
  imports: [BrowserModule,IonicStorageModule.forRoot(), IonicModule.forRoot(),AngularFireModule.initializeApp(environment.firebaseConfig), AngularFirestoreModule,AppRoutingModule,CommonModule, PipesModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
