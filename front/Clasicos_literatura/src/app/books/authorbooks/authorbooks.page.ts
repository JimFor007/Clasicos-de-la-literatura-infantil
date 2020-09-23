import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/Services/test.service';
import { author } from 'src/app/models/author.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorbooks',
  templateUrl: './authorbooks.page.html',
  styleUrls: ['./authorbooks.page.scss'],
})
export class AuthorbooksPage implements OnInit {

  authors:author[] = [];
  constructor(private testService: TestService, private router: Router) { }

  ngOnInit() {
    this.authors=this.testService.getAllAuthors();
  }

  quiz(book: string){
    this.router.navigate(["/quiz"]);
    console.log(book)
  }

}
