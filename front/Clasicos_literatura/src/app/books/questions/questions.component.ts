import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {

  choosed:string;
  alphas = ["Answer 1","Answer 2","Answer 3"]

  bethas:string[] = ["Cómo", "Qué", "Quién"]

  respuestas:string[]=["choosed1","choosed2","choosed3"];
  tetha: string=this.bethas[0]; 

  answers:string[]=[];
  

  constructor(public alertController: AlertController,private router: Router, private storage: Storage) { }

  

  ngOnInit() {
  }

  async presentAlertConfirm(score:number) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Finalizado',
      message: 'Su puntaje es: '+score,
      buttons: [
         {
          text: 'Okay',
          handler: () => {
            this.router.navigate(['/']);
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
    if(this.bethas.indexOf(this.tetha)<this.bethas.length){
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
