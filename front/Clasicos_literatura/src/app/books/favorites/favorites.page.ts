import { Component, OnInit } from '@angular/core';
import { author } from 'src/app/models/author.model';
import { TestService } from '../../Services/test.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { userFavorite } from 'src/app/models/userFavorite.model';
import { user } from 'src/app/models/usuario.model';




@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  
  authors:author[] = [];
  books: any[]=[];
  length:number;
  id:string;


  constructor(private testService: TestService,private router: Router) { }

  ngOnInit() {

    this.testService.stateUser().subscribe(id=>{
      if(id === null){ this.id=null}
      else{
      console.log(id);
      this.id=id.uid;
      this.testService.getUserData(id.uid).subscribe(data=>{
        this.books = data.libros
        console.log(this.books)
        this.length = data.libros.length;
        console.log(data.libros.length);
      });}
    });    
  }

  unFav(titulo:string,imagen:string, apunte:string){
    this.testService.eliminarLibro(this.id,titulo,imagen,apunte);
  }
  name(book: string){
    this.router.navigate(["/notes", book]);
    console.log(book)
}

route(ruta:string){
  this.router.navigate(["/"+ruta]);
}


}
