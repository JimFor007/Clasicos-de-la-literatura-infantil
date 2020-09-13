import { Component, OnInit } from '@angular/core';
import { AllbooksPage } from './allbooks/allbooks.page';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {

books: number;

  constructor() { 
   this.books =1;
  }

  ngOnInit() {
  }

}
