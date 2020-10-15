import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestService } from '../../Services/test.service';
import { author } from 'src/app/models/author.model';
import { ActivatedRoute, Router } from '@angular/router';
import { book } from 'src/app/models/libro.model';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.page.html',
  styleUrls: ['./allbooks.page.scss'],
})
export class AllbooksPage implements OnInit {

  authors:author[] = [];
  favorite:string="heart-outline";
  favoriteB:boolean=false;
  textoBuscar=''
  constructor(private testService: TestService, private router: Router, public alertController: AlertController) { 
  }

  ngOnInit() {

    /*this.testService.getTodos().subscribe(
      data=>{
        this.authors= data;
      }

    )*/
   this.authors = this.testService.getAllAuthors();

  }
  search(event){
    this.textoBuscar=event.detail.value
  }

  async presentAlertConfirm(book: book) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: book.favorito == true? "removido de favoritos": "añadido de favoritos",
      message: '',
      buttons: [
         {
          text: 'Okay',
          handler: () => {
            book.favorito = book.favorito==true? false:true
          }
        }
      ]
    });

    await alert.present();
  }

  quiz(book: string){
    this.router.navigate(["/quiz",book]);
  }
  read(book: string){
    this.router.navigate(["/lecturalibro",book]);
  }

}
