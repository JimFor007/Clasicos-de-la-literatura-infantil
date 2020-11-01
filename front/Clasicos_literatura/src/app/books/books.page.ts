import { Component, OnInit } from '@angular/core';
import { author } from '../models/author.model';
import { TestService } from '../Services/test.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {
  count: number;
  books: number;
  authors: author[] = [];

  allbooks: [];


  constructor(private testService: TestService) {
    this.count = 0;
    this.testService.getTodos().subscribe(
      data => {
        this.authors = data;

        for (let i = 0; i < this.authors.length; i++) {
          this.count += this.authors[i].books.length;
        }
        this.books = this.count;
      }
    );
  }

  ngOnInit() {
  }

}
