import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {

  choosed:string;

  alphas = ["1","2","3"] 

  answers:number[]=[];

  constructor() { }

  ngOnInit() {
  }


  verifyQuiz(){
    this.alphas.forEach(element => {
      
    });
  }

  add(value){
    this.answers.push(1)
    console.log(value)
  }
}
