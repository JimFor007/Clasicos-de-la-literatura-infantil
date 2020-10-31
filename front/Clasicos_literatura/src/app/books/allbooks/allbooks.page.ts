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
  users: any[]=[];
  books: any[]=[];
  id: string;
  constructor(private testService: TestService, private router: Router, public alertController: AlertController) { 
  }

  ngOnInit() {
    this.testService.getTodos().subscribe(
      data=>{
        this.authors= data;
      });
      this.testService.stateUser().subscribe(id=>{
        this.id=id.uid;
      });
      
    }

  addFav(titulo: string, imagen:string,book:book){
    this.testService.añadirLibro(this.id,titulo, imagen)
    this.presentAlertConfirm();
  }
  search(event){
    this.textoBuscar=event.detail.value
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: "añadido de favoritos",
      message: '',
      buttons: [
         {
          text: 'Okay',
          handler: () => {
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
