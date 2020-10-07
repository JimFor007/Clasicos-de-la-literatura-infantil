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
        option1: "Sebastián",
        option2: "Andres",
        option3: "Jimmy",
        correctAnswer: "Sebastián"
      },
    {
      question: "Cuántos años tienes",
        option1: "12",
        option2: "20",
        option3: "33",
        correctAnswer: "20"
    },{
      question: "Qué haces",
        option1: "Nada",
        option2: "Existir",
        option3: "Morir",
        correctAnswer: "Nada"
    },{
      question: "Aquí el incierto",
        option1: "Ayer",
        option2: "y el",
        option3: "hoy distinto",
        correctAnswer: "Ayer"
    }]
    },{
      titulo: "Giannettino",
      imagen: "../../../assets/images/Giannettino.jpg",
      trivia: false,
      favorito: true,
      quizes: [{
        question: "Cómo te llamas",
        option1: "1",
        option2: "2",
        option3: "3",
        correctAnswer: "1"
      }]
    }]
  },{
    name:"Joaquín Salvador Lavado Tejón",
    image:"https://1.bp.blogspot.com/_e5rLQEpqOEM/SA1wLp0DhXI/AAAAAAAAF84/viUV7UEbAy0/s320/SalvadorLavado.jpg",
    books:[{
      titulo: "Mafalda",
      imagen: "https://static.megustaleer.com/images/libros_650_x/EH408815.jpg",
      trivia: false,
      favorito: false,
      quizes: [{
        question: "Cómo te llamas",
        option1: "1",
        option2: "2",
        option3: "3",
        correctAnswer: "2"
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
        correctAnswer: "3"
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
        correctAnswer: "2"
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
        correctAnswer: "3"
      }]
    }]
  },{
    name:"Julio verne",
    image:"https://upload.wikimedia.org/wikipedia/commons/d/d1/F%C3%A9lix_Nadar_1820-1910_portraits_Jules_Verne_%28restoration%29.jpg",
    books:[{
      titulo: "Vuelta al mundo en ochenta dias",
      imagen: "../../../assets/images/VueltaAlMundoEnOchentaDias.jpg",
      trivia: true,
      favorito: true,
      quizes: [{
        question: "Quién fue",
        option1: "yo",
        option2: "tú",
        option3: "él",
        correctAnswer: "él"
      }]
    },{
      titulo: "Veinte lenguas de viaje submarino",
      imagen: "../../../assets/images/VeinteLeguasDeViajeSubmarino.jpg",
      trivia: true,
      favorito: true,
      quizes: [{
        question: "Cuándo fue?",
        option1: "Ayer",
        option2: "Hoy",
        option3: "Mañana",
        correctAnswer: "Mañana"
      }]
    }]
  }
  ]
  constructor() { }

  getAllAuthors(){
    return this.authors;
  }

  findAuthor(name: string){
    this.authors.forEach(author=>{
      if(author.name==name){
        return "hola";
      }
    })
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
