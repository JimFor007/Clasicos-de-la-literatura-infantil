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

  
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Libro añadido a favoritos',
      message: '',
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
  
  toggle(): void {
    if(this.favorite == "heart-outline"){
      this.favorite= "heart"
    }else{
      this.favorite= "heart-outline"
    }
    this.presentAlertConfirm();
    }

  quiz(book: book){
    this.storage.remove('book');
    this.storage.set('book',book)
    this.router.navigate(["/quiz"]);
  }

}
