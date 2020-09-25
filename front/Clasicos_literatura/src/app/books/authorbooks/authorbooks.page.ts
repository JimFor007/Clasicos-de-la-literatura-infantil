import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/Services/test.service';
import { author } from 'src/app/models/author.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authorbooks',
  templateUrl: './authorbooks.page.html',
  styleUrls: ['./authorbooks.page.scss'],
})
export class AuthorbooksPage implements OnInit {

  authors:author[] = [];
  name :string;
  constructor(private testService: TestService, private router: Router,private router2: ActivatedRoute) { }

  ngOnInit() {
    this.authors=this.testService.getAllAuthors();
    this.router2.paramMap.subscribe(params=>{
      this.name= params.get('author')     
  });
  }

  quiz(book: string){
    this.router.navigate(["/quiz"]);
    console.log(book)
  }

}
