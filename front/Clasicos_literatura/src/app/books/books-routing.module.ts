import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksPage } from './books.page';
import { AllbooksPage } from './allbooks/allbooks.page';
import { AuthorbooksPage } from './authorbooks/authorbooks.page';
import { IndexPage } from '../index/index.page';

const routes: Routes = [
  {
    path: '',
    component: BooksPage,
    children:[
      {
        path: '',
        redirectTo: '/books/todos',
        pathMatch: 'full'
      },
      {
        path:'todos',
        loadChildren: () => import('./allbooks/allbooks.module').then( m => m.AllbooksPageModule)
        //loadChildren: './allbooks/allbooks.module#AllbooksPageModule'
      },
      {
        path:'autor',
        loadChildren: () => import('./authorbooks/authorbooks.module').then( m => m.AuthorbooksPageModule)
      },
      {
        path:'favoritos',
        loadChildren: () => import('./favorites/favorites.module').then( m => m.FavoritesPageModule)
      },
      {
        path:'home',
        redirectTo: '/index',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksPageRoutingModule {}
