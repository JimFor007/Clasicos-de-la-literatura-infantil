import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestService } from '../../Services/test.service';
import { author } from 'src/app/models/author.model';
import { Router, RouterLink } from '@angular/router';
import { book } from 'src/app/models/libro.model';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.page.html',
  styleUrls: ['./allbooks.page.scss'],
})
export class AllbooksPage implements OnInit {

  authors:author[] = [];
  favorite:string="heart-outline";
  favoriteB:boolean=false;
  constructor(private testService: TestService, private router: Router) { 
  }

  ngOnInit() {
    this.authors = this.testService.getAllAuthors();
  }
  
  toggle(): void {
  if(this.favorite == "heart-outline"){
    this.favorite= "heart"
  }else{
    this.favorite= "heart-outline"
  }
  }

  quiz(book: string){
    this.router.navigate(["/quiz"]);
    console.log(book)
  }

}
