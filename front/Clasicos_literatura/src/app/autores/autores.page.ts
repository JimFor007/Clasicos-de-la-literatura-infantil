import { Component, OnInit } from '@angular/core';
import { TestService } from '../Services/test.service';
import { author } from '../models/author.model';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.page.html',
  styleUrls: ['./autores.page.scss'],
})
export class AutoresPage implements OnInit {
  authors:author[] = [];
  constructor(private testService: TestService) { }

  ngOnInit() {
    this.authors=this.testService.getAllAuthors();
  }

}
