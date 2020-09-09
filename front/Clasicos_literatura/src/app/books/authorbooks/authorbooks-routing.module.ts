import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorbooksPage } from './authorbooks.page';

const routes: Routes = [
  {
    path: '',
    component: AuthorbooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorbooksPageRoutingModule {}
