import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
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
    path: 'quiz/:book',
    loadChildren: () => import('./books/quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
    path: 'autores',
    loadChildren: () => import('./autores/autores.module').then( m => m.AutoresPageModule)
  },
  {
    path: 'biography/:id',
    loadChildren: () => import('./biography/biography.module').then( m => m.BiographyPageModule)
  },
  {
    path: 'notes/:book',
    loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'lecturalibro/:book',
    loadChildren: () => import('./lectura-libro/lectura-libro.module').then( m => m.LecturaLibroPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
