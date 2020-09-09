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
        path:'todos',
        loadChildren: './allbooks/allbooks.module#AllbooksPageModule'
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
  },
  {
    path: '',
    redirectTo: '/books/todos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksPageRoutingModule {}
