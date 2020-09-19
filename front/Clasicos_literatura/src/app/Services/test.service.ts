import { Injectable } from '@angular/core';
import { book } from '../models/libro.model';
import {author} from '../models/author.model';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  authors: author[]=[{
    name:"Carlo collodi",
    image:"https://www.elsiglodetorreon.com.mx/m/i/2017/10/992228.jpeg",
    books:[{
      titulo: "pinocho",
      imagen: "../../../assets/images/Cerditos.jpg",
      trivia: true
    },{
      titulo: "pinocho la venganza",
      imagen: "../../../assets/images/Cerditos.jpg",
      trivia: true
    }]
  },{
    name:"Charles bukowski",
    image:"https://elcultural.com/wp-content/uploads/2019/04/Charles-Bukowski-696x403.jpg",
    books:[{
      titulo: "Women",
      imagen: "../../../assets/images/Cerditos.jpg",
      trivia: true
    },{
      titulo: "Hollywood",
      imagen: "../../../assets/images/Cerditos.jpg",
      trivia: true
    },{
      titulo: "Hollywood",
      imagen: "../../../assets/images/Cerditos.jpg",
      trivia: true
    }]
  },{
    name:"UN PUTO",
    image:"https://elcultural.com/wp-content/uploads/2019/04/Charles-Bukowski-696x403.jpg",
    books:[{
      titulo: "Women",
      imagen: "../../../assets/images/Caperutcita_Roja.jpg",
      trivia: true
    }]
  }
  ]
  constructor() { }

  getAllAuthors(){
    return this.authors;
  }
}
