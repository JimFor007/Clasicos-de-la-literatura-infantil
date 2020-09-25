import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {

  choosed:string;

  alphas = ["1","2","3"]
  bethas:string[] = ["Cómo", "Qué", "Quién"] 
  tetha: string=this.bethas[0]; 
  answers:number[]=[];
  score:number=0;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }


  verifyQuiz(){
    this.alphas.forEach(element => {
      
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Finalizado',
      message: 'Su puntaje es: '+this.score,
      buttons: [
         {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }


  add(){
    console.log(this.choosed)
    if(this.bethas.indexOf(this.tetha)<this.bethas.length){
      this.tetha=this.bethas[this.bethas.indexOf(this.tetha)+1]
    }else if(this.bethas.indexOf(this.tetha)<0){
      this.presentAlertConfirm();
    }
    console.log(this.bethas.indexOf(this.tetha));
  }
}
