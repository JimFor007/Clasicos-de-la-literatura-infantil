import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestService } from '../../Services/test.service';
import { author } from 'src/app/models/author.model';
import { ActivatedRoute, Router } from '@angular/router';
import { book } from 'src/app/models/libro.model';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { userFavorite } from 'src/app/models/userFavorite.model';
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
  apunte:string;

  booksFav: any[] = [];


  constructor(private testService: TestService, private router: Router, public alertController: AlertController) {}

  ngOnInit() {
    this.testService.getTodos().subscribe(
      data=>{
        this.authors= data;
        console.log(this.authors);
      });
      this.testService.stateUser().subscribe(id=>{
        
        if(id===null){this.id=null}
        else{
        this.id=id.uid;
        this.testService.getUserData(id.uid).subscribe(data=>{
          this.users = data.libros    
          this.booksFav=  data.libros;      
        })
        }
      })
      }

  addFav(titulo: string, imagen:string,book:book){
    let exist=false;
    for(let i=0;i<this.users.length;i++) {
      if(this.users[i].titulo==titulo){
        exist=true; 
        return;
      }
    }
    if(!exist){
      this.testService.añadirLibro(this.id,titulo, imagen)
      this.presentAlertConfirm();
    }
  }

  search(event){
    this.textoBuscar=event.detail.value
  }
  async unFavConfirm(titulo:string,imagen:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: "¿Esta seguro que desea eliminar este libro de favoritos?",
      message: 'se eliminara <strong>'+titulo+'</strong> de sus favoritos',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        },
         {
          text: 'Okay',
          handler: () => {  
            
            this.booksFav.find(booksFav=> {
             if( booksFav.titulo=== titulo){
             this.testService.eliminarLibro(this.id,titulo,imagen,booksFav.apunte);
             }    
            }
              );
            
          }
        }
      ]
    });

    await alert.present();
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

  stateicon(nombre: string){
    
   if(this.booksFav.find(booksFav=> booksFav.titulo   === nombre) === undefined){
    return 0;
   }
   else{
     return 1;
   }



  }

}
