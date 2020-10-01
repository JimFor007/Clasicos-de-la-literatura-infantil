import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then( m => m.BooksPageModule)
  },
  {
    path: 'allbooks',
    loadChildren: () => import('./books/allbooks/allbooks.module').then( m => m.AllbooksPageModule)
  },
  {
    path: 'authorbooks',
    loadChildren: () => import('./books/authorbooks/authorbooks.module').then( m => m.AuthorbooksPageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./books/favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./books/quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
    path: 'autores',
    loadChildren: () => import('./autores/autores.module').then( m => m.AutoresPageModule)
  },
  {
    path: 'biography/:author',
    loadChildren: () => import('./biography/biography.module').then( m => m.BiographyPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'lectura-libro',
    loadChildren: () => import('./lectura-libro/lectura-libro.module').then( m => m.LecturaLibroPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
