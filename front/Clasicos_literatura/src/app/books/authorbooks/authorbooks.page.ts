import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/Services/test.service';
import { author } from 'src/app/models/author.model';

@Component({
  selector: 'app-authorbooks',
  templateUrl: './authorbooks.page.html',
  styleUrls: ['./authorbooks.page.scss'],
})
export class AuthorbooksPage implements OnInit {

  authors:author[] = [];
  constructor(private testService: TestService) { }

  ngOnInit() {
    this.authors=this.testService.getAllAuthors();
  }

}
