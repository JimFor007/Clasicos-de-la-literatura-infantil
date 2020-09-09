import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllbooksPage } from './allbooks.page';

const routes: Routes = [
  {
    path: '',
    component: AllbooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllbooksPageRoutingModule {}
