import { Component, OnInit } from '@angular/core';
import { author } from '../models/author.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TestService } from '../Services/test.service';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.page.html',
  styleUrls: ['./biography.page.scss'],
})
export class BiographyPage implements OnInit {

  name :string;

  authors:author[] = [];

  constructor(private router: ActivatedRoute, private service: TestService) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params=>{
      this.name= params.get('author')     
  });
  }

}
