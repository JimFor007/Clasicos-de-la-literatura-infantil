import { Injectable } from '@angular/core';
import { book } from '../models/libro.model';
import {author} from '../models/author.model';
import { quiz } from '../models/quiz.model';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  

  authors: author[]=[{
    name:"Carlo collodi",
    image:"https://www.elsiglodetorreon.com.mx/m/i/2017/10/992228.jpeg",
    books:[{
      titulo: "Los tres cerditos",
      imagen: "../../../assets/images/Cerditos.jpg",
      trivia: true,
      favorito: true,
      quizes: [{
        question: "Cómo te llamas",
        option1: "1",
        option2: "2",
        option3: "3",
        correctAnswer: 1
      },
    {
      question: "Cuántos años tienes",
        option1: "1",
        option2: "2",
        option3: "3",
        correctAnswer: 1
    }]
    },{
      titulo: "Giannettino",
      imagen: "../../../assets/images/Giannettino.jpg",
      trivia: true,
      favorito: true,
      quizes: [{
        question: "Cómo te llamas",
        option1: "1",
        option2: "2",
        option3: "3",
        correctAnswer: 1
      }]
    }]
  },{
    name:"Joaquín Salvador Lavado Tejón",
    image:"https://1.bp.blogspot.com/_e5rLQEpqOEM/SA1wLp0DhXI/AAAAAAAAF84/viUV7UEbAy0/s320/SalvadorLavado.jpg",
    books:[{
      titulo: "Mafalda",
      imagen: "https://static.megustaleer.com/images/libros_650_x/EH408815.jpg",
      trivia: true,
      favorito: false,
      quizes: [{
        question: "Cómo te llamas",
        option1: "1",
        option2: "2",
        option3: "3",
        correctAnswer: 1
      }]
    },{
      titulo: "Gente en su sitio",
      imagen: "../../../assets/images/gente_en_su_sitio.jpg",
      trivia: true,
      favorito: false,
      quizes: [{
        question: "Cómo te llamas",
        option1: "1",
        option2: "2",
        option3: "3",
        correctAnswer: 1
      }]
    }]
  },{
    name:"Charles Perraulti",
    image:"https://upload.wikimedia.org/wikipedia/commons/d/d4/ChPerrault.jpg",
    books:[{
      titulo: "Caperucita roja",
      imagen: "../../../assets/images/Caperutcita_Roja.jpg",
      trivia: true,
      favorito: true,
      quizes: [{
        question: "Cómo te llamas",
        option1: "1",
        option2: "2",
        option3: "3",
        correctAnswer: 1
      }]
    },{
      titulo: "El gato con botas",
      imagen: "../../../assets/images/Gato_Con_Botas.jpg",
      trivia: true,
      favorito: true,
      quizes: [{
        question: "Cómo te llamas",
        option1: "1",
        option2: "2",
        option3: "3",
        correctAnswer: 1
      }]
    }]
  },{
    name:"Julio verne",
    image:"https://upload.wikimedia.org/wikipedia/commons/d/d1/F%C3%A9lix_Nadar_1820-1910_portraits_Jules_Verne_%28restoration%29.jpg",
    books:[{
      titulo: "Vuelta al mundo en ochenta dias",
      imagen: "../../../assets/images/VeinteLeguasDeViajeSubmarino.jpg",
      trivia: true,
      favorito: true,
      quizes: [{
        question: "Cómo te llamas",
        option1: "1",
        option2: "2",
        option3: "3",
        correctAnswer: 1
      }]
    },{
      titulo: "Veinte lenguas de viaje submarino",
      imagen: "../../../assets/images/VueltaAlMundoEnOchentaDias.jpg",
      trivia: true,
      favorito: true,
      quizes: [{
        question: "Cómo te llamas",
        option1: "1",
        option2: "2",
        option3: "3",
        correctAnswer: 1
      }]
    }]
  }
  ]
  constructor() { }

  getAllAuthors(){
    return this.authors;
  }

  findBook(title: string){
    this.authors.forEach(author => {
      let books = author.books;
      for (let index = 0; index < books.length; index++) {
        if (books[index].titulo==title) {
          return books[index];
        }
     }
    });
  }
}
