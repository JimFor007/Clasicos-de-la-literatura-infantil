import { Injectable } from '@angular/core';
import { book } from '../models/libro.model';


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


  constructor() { }

  getAllBooks(){
    return this.books;
  }
}
