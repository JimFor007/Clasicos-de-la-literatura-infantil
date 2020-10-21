import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/Services/test.service';
import { author } from 'src/app/models/author.model';
import { Router, ActivatedRoute } from '@angular/router';
import { book } from 'src/app/models/libro.model';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-authorbooks',
  templateUrl: './authorbooks.page.html',
  styleUrls: ['./authorbooks.page.scss'],
})
export class AuthorbooksPage implements OnInit {

  authors:author[] = [];
  name :string;
  textoBuscar=''
  constructor(private testService: TestService, private router: Router,private router2: ActivatedRoute, public alertController: AlertController) { }

  ngOnInit() {
    this.testService.getTodos().subscribe(
      data=>{
        this.authors= data;
      });
    this.router2.paramMap.subscribe(params=>{
      this.name= params.get('author')     
  });
  this.print()
  }

  print(){
    console.log(this.authors)
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

  search(event){
    console.log(event.detail.value)
    this.textoBuscar=event.detail.value
  }

  read(book: string){
    this.router.navigate(["/lecturalibro",book]);
  }

  quiz(book: string){
    this.router.navigate(["/quiz",book]);
  }
  biography(id: string){
    this.router.navigate(["/biography", id]);
}
}
