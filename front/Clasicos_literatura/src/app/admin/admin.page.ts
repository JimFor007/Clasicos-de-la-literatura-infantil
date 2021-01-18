import { Component, OnInit } from '@angular/core';
import { TestService } from '../Services/test.service';
import { author } from '../models/author.model';
import { quiz } from '../models/quiz.model';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  authors: author[] = [];

  selectedAuthor: any;

  autor = {
    autorName: '',
    image: '',
    bio: '',
    birthDate: '',
    books: {
      capitulos: {
        contenido: '',
        titulo: ''
      },
      titulo: '',
      favorito: false,
      imagen: '',
      quiz: [],
      trivia: true
    }
  }

  tituloLibro: String
  tituloCapitulo: String
  contenido: String

  correctAnswer: String
  option1: String
  option2: String
  question: String

  books = []
  capitulos = []
  quiz = []


  constructor(private testService: TestService) { }

  ngOnInit() {
    this.testService.getTodos().subscribe(
      data => {
        this.authors = data;
      });
  }


  addCapitulo() {
    var capitulo = {
      contenido: this.contenido,
      titulo: this.tituloCapitulo
    }
    this.capitulos.push(capitulo);
    this.tituloCapitulo = ''
    this.contenido = ''
    console.log(this.capitulos)
    console.log(this.authors)
  }

  addQuiz() {
    var quiz = {
      correctAnswer: this.correctAnswer,
      option1: this.option1,
      option2: this.option2,
      option3: this.correctAnswer,
      question: this.question
    }
    this.quiz.push(quiz)
    this.correctAnswer = ''
    this.option1 = ''
    this.option2 = ''
    this.question = ''
    console.log(this.quiz)
  }

  addBook() {
    var book = {
      capitulos: this.capitulos,
      favorito: false,
      imagen: '',
      quiz: this.quiz,
      trivia: this.quiz.length == 0 ? false : true
    }
    this.books.push(book)
    this.tituloLibro = ''
    console.log(this.books)
    this.testService.añadirL(this.books)
    this.books = []
    this.capitulos = []
    this.quiz = []
  }

  onSubmitTemplate() {
    console.log('Form submit')
    this.testService.añadirAutor(this.autor.autorName, this.autor.image, this.autor.bio, this.autor.birthDate);
  }
}