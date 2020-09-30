import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestService } from '../../Services/test.service';
import { author } from 'src/app/models/author.model';
import { Router, RouterLink } from '@angular/router';
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
  constructor(private testService: TestService, private router: Router, public alertController: AlertController,private storage: Storage) { 
  }

  ngOnInit() {
    this.authors = this.testService.getAllAuthors();
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

  quiz(book: book){
    this.storage.remove('book');
    this.storage.set('book',book)
    this.router.navigate(["/quiz"]);
  }

}
