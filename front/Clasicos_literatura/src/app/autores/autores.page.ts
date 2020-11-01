import { Component, OnInit } from '@angular/core';
import { TestService } from '../Services/test.service';
import { author } from '../models/author.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.page.html',
  styleUrls: ['./autores.page.scss'],
})
export class AutoresPage implements OnInit {
  textoBuscar=''
  authors:author[] = [];
  constructor(private testService: TestService, private router: Router) { }

  ngOnInit() {
    this.testService.getTodos().subscribe(
      data=>{
        this.authors = data;
      });    
  }



  search(event){
    this.textoBuscar=event.detail.value
  }

  biography(id: string){
    this.router.navigate(["/biography", id]);
}


}
