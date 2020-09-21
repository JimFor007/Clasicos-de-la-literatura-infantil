import { Component, OnInit } from '@angular/core';
import { author } from 'src/app/models/author.model';
import { TestService } from 'src/app/Services/test.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  authors:author[] = [];
  
  constructor(private testService: TestService) { 
  }
  
  ngOnInit() {
    this.authors = this.testService.getAllAuthors();
  }

}
