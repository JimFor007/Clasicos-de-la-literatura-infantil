import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../Services/test.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  libro:string;
  imagen:string;

  apunteAntiguo:string;
  apunte:string;
  book:[]=[];
  books: any[]=[];
  text:string;
  id:string;

  constructor(private router: ActivatedRoute, private testService: TestService, public toastController: ToastController) { }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Apunte guardado',
      duration: 2000
    });
    toast.present();
  }

  findBook(){
    this.books.forEach(data=>{
      console.log(data)
      if(data.titulo==this.libro){
      }
    })
  }

  guardarApunte(apunte:string){
    this.testService.guardarApunte(this.id,this.apunteAntiguo,apunte,this.libro,this.imagen);
    this.presentToast();
  }

  ngOnInit() {
    this.router.paramMap.subscribe(params=>{
      this.libro= params.get('book')
      this.testService.stateUser().subscribe(id=>{
        this.id=id.uid;
        this.testService.getUserData(id.uid).subscribe(data=>{
          this.books = data.libros
          for (let i = 0; i < this.books.length; i++) {
            if(this.books[i].titulo==this.libro){
              this.imagen=this.books[i].imagen;
              this.apunteAntiguo=this.books[i].apunte;
            }
          }
        });
      });
  });
  }



}
