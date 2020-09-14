import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { book } from '../../models/libro.model'
import { TestService } from '../../Services/test.service';

@Component({
  selector: 'app-allbooks',
  templateUrl: './allbooks.page.html',
  styleUrls: ['./allbooks.page.scss'],
})
export class AllbooksPage implements OnInit {

  books:book[] = [];
  
  constructor(private testService: TestService) { 
  }

  ngOnInit() {
    this.books = this.testService.getAllBooks();
    console.log(this.books);
  }

}
