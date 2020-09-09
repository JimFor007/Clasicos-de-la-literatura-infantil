import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthorbooksPageRoutingModule } from './authorbooks-routing.module';

import { AuthorbooksPage } from './authorbooks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthorbooksPageRoutingModule
  ],
  declarations: [AuthorbooksPage]
})
export class AuthorbooksPageModule {}
