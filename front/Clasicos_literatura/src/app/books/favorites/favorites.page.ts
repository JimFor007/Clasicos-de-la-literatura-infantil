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
  users: any[]=[];
  constructor(private testService: TestService,private router: Router) { }

  ngOnInit() {

    this.testService.stateUser().subscribe(id=>{
      this.testService.getUserData(id.uid).subscribe(data=>{
        this.users=data.libros
        console.log(this.users)
      });
    });
    
      
      //this.testService.create("usuario1");
      
    
  }

  
  name(book: string){
    this.router.navigate(["/notes", book]);
    console.log(book)
}


}
