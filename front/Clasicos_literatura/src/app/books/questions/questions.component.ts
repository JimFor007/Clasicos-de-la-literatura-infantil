import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { author } from 'src/app/models/author.model';
import { TestService } from 'src/app/Services/test.service';
import { book } from 'src/app/models/libro.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {

   map = new Map<string, string[]>(); 
   key = new Object();
  


  @Input() book1:book;
  choosed:string;
  tetha:string;
  bethas:string[] = []

  //respuestas correctas
  respuestas:string[]=[];
  
  //respuestas de usuario
  answers:string[]=[];

  authors:author[] = [];

  constructor(public alertController: AlertController,private router: Router, private storage: Storage,private testService: TestService) {}

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

  //init questions and answers
  initQuiz(){
    for (let i = 0; i < this.book1.quizes.length; i++) {
      this.map.set(this.book1.quizes[i].question,[this.book1.quizes[i].option1,this.book1.quizes[i].option2,this.book1.quizes[i].option3])
      this.bethas.push(this.book1.quizes[i].question);
      this.respuestas.push(this.book1.quizes[i].correctAnswer)
    }
  }

  ngOnInit() {
      console.log(this.book1)
      this.initQuiz();
      this.tetha = this.bethas[0]
  }

  async presentAlertConfirm(score:number) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Finalizado',
      message: 'Su puntaje es: '+score+"/"+this.respuestas.length,
      buttons: [
         {
          text: 'Okay',
          handler: () => {
            this.router.navigate(['/allbooks']);
            this.answers=[];
          }
        }
      ]
    });
    await alert.present();
  }

  //verify answers
  verifyAnswers(){
    let score=0;
    for (let i = 0; i < this.respuestas.length; i++) {
      if(this.answers[i]==this.respuestas[i]){
        score=score+1;
      }
    }
    this.presentAlertConfirm(score);
  }
  
  //push the selected option if the quiz is not end, and change question
  //at end verify answers and reset
  add(){
    if(this.bethas.indexOf(this.tetha)<this.map.size){
      this.answers.push(this.choosed);
      this.tetha=this.bethas[this.bethas.indexOf(this.tetha)+1]
      this.choosed=null;
      if(this.bethas.indexOf(this.tetha)==-1){
        this.verifyAnswers();
        this.tetha=this.bethas[0];
      }
    }
  }
}
