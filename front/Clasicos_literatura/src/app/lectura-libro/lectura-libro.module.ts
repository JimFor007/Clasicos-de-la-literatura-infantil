import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LecturaLibroPageRoutingModule } from './lectura-libro-routing.module';

import { LecturaLibroPage } from './lectura-libro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LecturaLibroPageRoutingModule
  ],
  declarations: [LecturaLibroPage]
})
export class LecturaLibroPageModule {}
