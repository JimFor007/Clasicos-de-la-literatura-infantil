import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../Services/test.service';
import { author } from '../models/author.model';
import { book } from '../models/libro.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  libro:string;
  authors:author[] = [];
  book1:book ;
  apunte:string;

  constructor(private router: ActivatedRoute, private testService: TestService) { 
    this.authors = this.testService.getAllAuthors();
  }

  findBook(title: string){
    this.authors.forEach(author => {
      let books = author.books;
      for (let index = 0; index < books.length; index++) {
        if (books[index].titulo==title) {
          this.book1=books[index]
          return books[index];
        }
     }
    });
  }

  ngOnInit() {
    this.router.paramMap.subscribe(params=>{
      this.libro= params.get('book')
  });
  this.findBook(this.libro);
  this.apunte=this.book1.apunte
  }

}
