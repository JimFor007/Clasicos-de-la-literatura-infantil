import { Component, OnInit } from '@angular/core';
import { author } from 'src/app/models/author.model';
import { TestService } from 'src/app/Services/test.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  authors:author[] = [];
  book: string = "Caperucita Roja";
  
  

  constructor(private testService: TestService, private router: ActivatedRoute) { 
    this.authors = this.testService.getAllAuthors();
  }
  
  ngOnInit() {
    
  }

}
