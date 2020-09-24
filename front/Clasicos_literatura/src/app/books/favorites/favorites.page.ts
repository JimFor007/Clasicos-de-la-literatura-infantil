import { Component, OnInit } from '@angular/core';
import { author } from 'src/app/models/author.model';
import { TestService } from '../../Services/test.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  
  authors:author[] = [];
  
  constructor(private testService: TestService) { }

  ngOnInit() {
    this.authors = this.testService.getAllAuthors();
  }
}
