import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllbooksPageRoutingModule } from './allbooks-routing.module';

import { AllbooksPage } from './allbooks.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllbooksPageRoutingModule,
    PipesModule
  ],
  declarations: [AllbooksPage]
})
export class AllbooksPageModule {}
