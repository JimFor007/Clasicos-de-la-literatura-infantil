import { Component, OnInit } from '@angular/core';
import { author } from 'src/app/models/author.model';
import { TestService } from '../../Services/test.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  
  authors:author[] = [];
  
  constructor(private testService: TestService,private router: Router) { }

  ngOnInit() {
    /*this.testService.getTodos().subscribe(
      data=>{
        this.authors= data;
        console.log('todos los libros', this.authors);
      }
    )*/
    
    //let user = firebase.auth().currentUser;
    console.log(this.testService.getAuthor("0WeoFJm9GCpsqEdKdkTG"))
    console.log(this.testService.getUserData("y3Splqi8ZAYoeH4DG9EE9PQctaB3"));
      
    
  let docRF=this.testService.getUserData("y3Splqi8ZAYoeH4DG9EE9PQctaB3");
  
  }
  
  name(book: string){
    this.router.navigate(["/notes", book]);
    console.log(book)
}


}
