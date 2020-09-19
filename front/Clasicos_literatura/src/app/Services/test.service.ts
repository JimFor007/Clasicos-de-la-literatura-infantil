import { Injectable } from '@angular/core';
import { book } from '../models/libro.model';
import {author} from '../models/author.model';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  books: book[] = [{
    titulo: "Caperucita Roja",
    imagen: "../../../assets/images/Caperutcita_Roja.jpg",
    trivia: true
  },{
    titulo: "Las aventuras de pinocho",
    imagen: "../../../assets/images/Pinocho.jpg",
    trivia: false
  },{
    titulo: "Los tres cerditos",
    imagen: "../../../assets/images/Cerditos.jpg",
    trivia: true
  },{
    titulo: "Las aventuras de pinocho",
    imagen: "../../../assets/images/Pinocho.jpg",
    trivia: false
  },{
    titulo: "Caperucita Roja",
    imagen: "../../../assets/images/Caperutcita_Roja.jpg",
    trivia: true
  },{
    titulo: "Los tres cerditos",
    imagen: "../../../assets/images/Cerditos.jpg",
    trivia: true
  },{
    titulo: "Caperucita Roja",
    imagen: "../../../assets/images/Caperutcita_Roja.jpg",
    trivia: true
  },{
    titulo: "Las aventuras de pinocho",
    imagen: "../../../assets/images/Pinocho.jpg",
    trivia: false
  },{
    titulo: "Los tres cerditos",
    imagen: "../../../assets/images/Cerditos.jpg",
    trivia: true
  }]

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

  getAllBooks(){
    return this.books;
  }
  getAllAuthors(){
    return this.authors;
  }
}
