import { Component, OnInit } from '@angular/core';
import { author } from 'src/app/models/author.model';
import { TestService } from 'src/app/Services/test.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Storage } from '@ionic/storage';
import { book } from 'src/app/models/libro.model';
import { promise } from 'protractor';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  authors:author[] = [];
  libro: string;
  book1:book ;
  
  constructor(private testService: TestService, private router: ActivatedRoute, private storage: Storage) { 
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
    this.findBook(this.libro)
  }

}
