import { Injectable } from '@angular/core';
import { book } from '../models/libro.model';
import {author} from '../models/author.model';
import { quiz } from '../models/quiz.model';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TestService {
  authors: author[]=[{
    name:"Carlo collodi",
    image:"https://www.elsiglodetorreon.com.mx/m/i/2017/10/992228.jpeg",
    books:[{
      titulo: "Los tres cerditos",
      capitulos:[{
        titulo: "capitulo 1",
        contenido: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac massa eros. Donec purus diam, interdum id nisl ut, congue vehicula ligula. Ut tincidunt ligula accumsan, sodales risus in, lobortis lorem. Aenean quis mauris at ipsum blandit pharetra. In lacinia, purus scelerisque finibus condimentum, nunc urna posuere ex, in ornare diam mauris varius odio. Nullam et placerat lorem. In pretium pellentesque feugiat. Sed faucibus ac arcu nec sodales. Mauris ut pulvinar augue. Fusce id viverra diam, ac convallis ex."
      },{
        titulo: "capitulo 2",
        contenido: "Maecenas a pretium ipsum. Etiam eu pellentesque orci. Aliquam erat volutpat. Cras id velit placerat, facilisis metus quis, dapibus enim. Suspendisse eu dui at libero blandit fermentum. Integer convallis libero felis, elementum fringilla nisl viverra quis. Fusce ultrices ultricies ipsum ut euismod. Nulla fermentum diam lobortis mollis mattis. Ut a hendrerit massa, eu malesuada massa. Aliquam cursus pulvinar dignissim. Ut dignissim ligula sed turpis sagittis, id ultricies augue pellentesque. Aliquam non mattis ex. Vivamus dolor tellus, convallis sit amet nisi et, dapibus maximus dolor."
      },{
        titulo: "capitulo 3",
        contenido: "Fusce vitae rhoncus sem. Curabitur fermentum dapibus velit sed congue. Nulla ultricies vehicula dolor, a ornare metus imperdiet vitae. Praesent eu lacus a nibh tincidunt interdum at id purus. Aliquam erat volutpat. Proin et sapien et lacus porta consectetur. Praesent nec elit luctus, molestie sem et, dignissim libero. Cras auctor rhoncus laoreet. Aliquam et sodales metus. Sed pharetra venenatis mollis. Fusce vitae est id leo tristique pharetra. Praesent pellentesque metus sed augue dignissim euismod. Integer magna nunc, lacinia quis tortor eu, volutpat consequat elit."
      }],
      imagen: "../../../assets/images/Cerditos.jpg",
      trivia: true,
      favorito: true,
      quizes: [{
        question: "¿Quién es el villano?",
        option1: "El primer cerdito",
        option2: "El lobo",
        option3: "Jimmy",
        correctAnswer: "El lobo"
      },
    {
      question: "¿El lobo qué hace?",
        option1: "Bailar breakdance",
        option2: "Cantar canciones de diomedes Díaz",
        option3: "Tumba las casas de los cerditos",
        correctAnswer: "Tumba las casas de los cerditos"
    },{
      question: "¿De qué material estaba hecha la casa del primer cerdito?",
        option1: "Paja",
        option2: "Metal",
        option3: "Tugnsteno",
        correctAnswer: "Paja"
    },{
      question: "¿De qué material estaba hecha la casa del segundo cerdito?",
        option1: "Madera",
        option2: "Vidrio",
        option3: "Es",
        correctAnswer: "Madera"
    }],
    apunte:"hola"
    },{
      titulo: "Giannettino",
      capitulos:[{
        titulo: "capitulo 1",
        contenido: "lorem"
      }],
      imagen: "../../../assets/images/Giannettino.jpg",
      trivia: false,
      favorito: true,
      quizes: [{
        question: "Cómo te llamas",
        option1: "1",
        option2: "2",
        option3: "3",
        correctAnswer: "1"
      }],
      apunte:"hola"
    }]
  },{
    name:"Joaquín Salvador Lavado Tejón",
    image:"https://1.bp.blogspot.com/_e5rLQEpqOEM/SA1wLp0DhXI/AAAAAAAAF84/viUV7UEbAy0/s320/SalvadorLavado.jpg",
    books:[{
      titulo: "Mafalda",
      capitulos:[{
        titulo: "capitulo 1",
        contenido: "lorem"
      }],
      imagen: "https://static.megustaleer.com/images/libros_650_x/EH408815.jpg",
      trivia: false,
      favorito: false,
      quizes: [{
        question: "Cómo te llamas",
        option1: "1",
        option2: "2",
        option3: "3",
        correctAnswer: "2"
      }],
      apunte:"hola"
    },{
      titulo: "Gente en su sitio",
      capitulos:[{
        titulo: "capitulo 1",
        contenido: "lorem"
      }],
      imagen: "../../../assets/images/gente_en_su_sitio.jpg",
      trivia: true,
      favorito: false,
      quizes: [{
        question: "Cómo te llamas",
        option1: "1",
        option2: "2",
        option3: "3",
        correctAnswer: "3"
      }],
      apunte:"hola"
    }]
  },{
    name:"Charles Perraulti",
    image:"https://upload.wikimedia.org/wikipedia/commons/d/d4/ChPerrault.jpg",
    books:[{
      titulo: "Caperucita roja",
      capitulos:[{
        titulo: "capitulo 1",
        contenido: "lorem"
      }],
      imagen: "../../../assets/images/Caperutcita_Roja.jpg",
      trivia: true,
      favorito: true,
      quizes: [{
        question: "Cómo te llamas",
        option1: "1",
        option2: "2",
        option3: "3",
        correctAnswer: "2"
      }],
      apunte:"hola"
    },{
      titulo: "El gato con botas",
      capitulos:[{
        titulo: "capitulo 1",
        contenido: "lorem"
      }],
      imagen: "../../../assets/images/Gato_Con_Botas.jpg",
      trivia: true,
      favorito: true,
      quizes: [{
        question: "Cómo te llamas",
        option1: "1",
        option2: "2",
        option3: "3",
        correctAnswer: "3"
      }],
      apunte:"hola"
    }]
  },{
    name:"Julio verne",
    image:"https://upload.wikimedia.org/wikipedia/commons/d/d1/F%C3%A9lix_Nadar_1820-1910_portraits_Jules_Verne_%28restoration%29.jpg",
    books:[{
      titulo: "Vuelta al mundo en ochenta dias",
      capitulos:[{
        titulo: "capitulo 1",
        contenido: "lorem"
      }],
      imagen: "../../../assets/images/VueltaAlMundoEnOchentaDias.jpg",
      trivia: true,
      favorito: true,
      quizes: [{
        question: "Quién fue",
        option1: "yo",
        option2: "tú",
        option3: "él",
        correctAnswer: "él"
      }],
      apunte:"hola"
    },{
      titulo: "Veinte lenguas de viaje submarino",
      capitulos:[{
        titulo: "capitulo 1",
        contenido: "lorem"
      }],
      imagen: "../../../assets/images/VeinteLeguasDeViajeSubmarino.jpg",
      trivia: true,
      favorito: true,
      quizes: [{
        question: "Cuándo fue?",
        option1: "Ayer",
        option2: "Hoy",
        option3: "Mañana",
        correctAnswer: "Mañana"
      }],
      apunte:"hola"
    }]
  }
  ]
  
  private todosCollection: AngularFirestoreCollection<author>;

  todos: Observable<author[]>;
 
  constructor(db: AngularFirestore) { 
    this.todosCollection = db.collection<author>('authors');
    this.todos=this.todosCollection.snapshotChanges().pipe(map(
      actions=>{
        return actions.map(a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      }
    ));
  }

// retorna toda la coleccion
  getTodos(){
    console.log(this.todos)
    return this.todosCollection.valueChanges();
  }
// retorna autor por id
  getAuthor(id:string){
    return this.todosCollection.doc<author>(id).valueChanges();
  }
  
  updateFavoriteBook(){}

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
