import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import {TestService} from '../Services/test.service';
import { author } from '../models/author.model';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  authors:author[] = [];

  autor = {
    autorName: '',
    image:'',
    bio: '',
    birthDate:'',
    books:[{
        titulo:'',
        capitulos:[{
          titulo:''
        },{
          titulo:''
        }]
      },
      {

      }]
    }

  
  constructor(private testService: TestService) {

   }

  ngOnInit() {
    this.testService.getTodos().subscribe(
      data=>{
        this.authors= data;
      });
    }
  
    onSubmitTemplate(){
    console.log('Form submit')
    console.log(this.autor)
    this.testService.añadirAutor(this.autor.autorName, this.autor.image, this.autor.bio, this.autor.birthDate);
  }
}
