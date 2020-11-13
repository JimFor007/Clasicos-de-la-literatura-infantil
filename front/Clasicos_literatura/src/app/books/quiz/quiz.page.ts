import { Component, OnInit } from '@angular/core';
import { author } from 'src/app/models/author.model';
import { TestService } from 'src/app/Services/test.service';
import { Router, ActivatedRoute } from '@angular/router';
import { book } from 'src/app/models/libro.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  authors:author[] = [];
  libro: string;
  book1:book ;
  img: string;

  map = new Map<string, string[]>(); 
  key = new Object();

  choosed:string;
  tetha:string;
  //aux para map.get(tetha)
  respuestasAux:string[]=[]
  
  bethas:string[] = []
  //respuestas correctas
  respuestas:string[]=[];
  
  //respuestas de usuario
  answers:string[]=[];

  constructor(private router2: Router,private router: ActivatedRoute,public alertController: AlertController, private testService: TestService) {}


  initQuiz(){
    for (let i = 0; i < this.book1.quizes.length; i++) {
      this.map.set(this.book1.quizes[i].question,[this.book1.quizes[i].option1,this.book1.quizes[i].option2,this.book1.quizes[i].option3])
      this.bethas.push(this.book1.quizes[i].question);
      this.respuestas.push(this.book1.quizes[i].correctAnswer)
    }
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
    this.testService.getTodos().subscribe(
      data=>{
        this.authors= data;
        console.log(data)
        this.router.paramMap.subscribe(params=>{
          this.libro= params.get('book')
        });
        this.findBook(this.libro)
        this.img=this.book1.imagen
        this.initQuiz();
        this.tetha = this.bethas[0]
        this.respuestasAux=this.map.get(this.tetha);
        this.choosed=null;
      });
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
            this.router2.navigate(['/books/todos'])
            this.answers=[];
            this.choosed=null
          }
        }
      ]
    });
    await alert.present();
  }
  verifyAnswers(){
    let score=0;
    for (let i = 0; i < this.respuestas.length; i++) {
      if(this.answers[i]==this.respuestas[i]){
        score=score+1;
      }
    }
    this.presentAlertConfirm(score);
  }
  add(){
    if(this.bethas.indexOf(this.tetha)<this.map.size){
      this.answers.push(this.choosed);
      this.tetha=this.bethas[this.bethas.indexOf(this.tetha)+1]
      this.respuestasAux=this.map.get(this.tetha);
      this.choosed=null;
      if(this.bethas.indexOf(this.tetha)==-1){
        this.verifyAnswers();
        this.tetha=this.bethas[0];
        this.respuestasAux=this.map.get(this.tetha)
        this.choosed=null;
        this.answers=[];
      }
    }
  }

}
