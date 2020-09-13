import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksPage } from './books.page';
import { AllbooksPage } from './allbooks/allbooks.page';
import { AuthorbooksPage } from './authorbooks/authorbooks.page';

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
        loadChildren: './authorbooks/authorbooks.module#AuthorbooksPageModule'
      },
      {
        path:'favoritos',
        loadChildren: './favorites/favorites.module#FavoritesPageModule'
      },
      {
        path:'quiz',
        loadChildren: './quiz/quiz.module#QuizPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksPageRoutingModule {}
