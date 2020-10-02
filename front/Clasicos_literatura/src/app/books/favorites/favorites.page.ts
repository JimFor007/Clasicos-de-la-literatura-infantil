import { Component, OnInit } from '@angular/core';
import { author } from 'src/app/models/author.model';
import { TestService } from '../../Services/test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  
  authors:author[] = [];
  
  constructor(private testService: TestService,private router: Router) { }

  ngOnInit() {
    this.authors = this.testService.getAllAuthors();
  }
  
  name(book: string){
    this.router.navigate(["/notes", book]);
    console.log(book)
}


}
