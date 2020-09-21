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
      titulo: "  pinocho",
      imagen: "../../../assets/images/Cerditos.jpg",
      trivia: true,
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
    image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.historyplay.tv%2Ffiles%2Fquino_y_mafalda.jpg&imgrefurl=https%3A%2F%2Flatam.historyplay.tv%2Fhoy-en-la-historia%2Fnace-mafalda-personaje-de-historieta-creado-por-quino&tbnid=TW1S_hmlr-6o2M&vet=12ahUKEwjg2oHrkPTrAhUstlkKHeAbBnEQMygAegUIARCxAQ..i&docid=OJGYvQBueZbY1M&w=433&h=509&q=quien%20escribio%20mafalda&hl=es-419&ved=2ahUKEwjg2oHrkPTrAhUstlkKHeAbBnEQMygAegUIARCxAQ",
    books:[{
      titulo: "Mafalda",
      imagen: "../../../assets/images/Mafalda.jpg",
      trivia: true,
      quizes: [{
        question: "Cómo te llamas",
        option1: "1",
        option2: "2",
        option3: "3",
        correctAnswer: 1
      }]
    },{
      titulo: "Gente en su sitio",
      imagen: "../../../assets/images/GenteEnSuSitio.jpg",
      trivia: true,
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
    image:"https://elcultural.com/wp-content/uploads/2019/04/Charles-Bukowski-696x403.jpg",
    books:[{
      titulo: "Caperucita roja",
      imagen: "../../../assets/images/Caperutcita_Roja.jpg",
      trivia: true,
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
    image:"https://elcultural.com/wp-content/uploads/2019/04/Charles-Bukowski-696x403.jpg",
    books:[{
      titulo: "Vuelta al mundo en ochenta dias",
      imagen: "../../../assets/images/VeinteLeguasDeViajeSubmarino.jpg",
      trivia: true,
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
}
