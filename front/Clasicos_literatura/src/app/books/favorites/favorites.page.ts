import { Component, OnInit } from '@angular/core';
import { author } from 'src/app/models/author.model';
import { TestService } from '../../Services/test.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

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
  keyUser = '&I%U%$234';


  constructor(private _cookieService: CookieService,private testService: TestService,private router: Router) { }

  ngOnInit() {

    if(this._cookieService.get(this.keyUser) == undefined || this._cookieService.get(this.keyUser) == null || this._cookieService.get(this.keyUser) == ''){
      this.id= null;
    }
    else{
      this.id= this._cookieService.get(this.keyUser);
      this.testService.getUserData(this._cookieService.get(this.keyUser)).subscribe(data=>{
        this.books = data.libros
        this.length = data.libros.length;   
      })
    }   

    /*this.testService.stateUser().subscribe(id=>{
      if(id === null){ this.id=null}
      else{
      this.id=id.uid;
      this.testService.getUserData(id.uid).subscribe(data=>{
        this.books = data.libros
        this.length = data.libros.length;
      });}
    });  */  
  }

  unFav(titulo:string,imagen:string, apunte:string){
    this.testService.eliminarLibro(this.id,titulo,imagen,apunte);
  }
  name(book: string){
    this.router.navigate(["/notes", book]);
}

route(ruta:string){
  this.router.navigate(["/"+ruta]);
}


}
