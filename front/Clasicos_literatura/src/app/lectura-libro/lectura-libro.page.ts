import { Component, OnInit } from '@angular/core';
import { author } from '../models/author.model';
import { TestService } from '../Services/test.service';
import { book } from '../models/libro.model';
import { ActivatedRoute } from '@angular/router';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { TtsService } from '../Services/tts.service';

@Component({
  selector: 'app-lectura-libro',
  templateUrl: './lectura-libro.page.html',
  styleUrls: ['./lectura-libro.page.scss'],
})
export class LecturaLibroPage implements OnInit {
  authors: author[];
  bookTitle: string[] = []
  bookContent: string[] = []
  initialContent;
  initalPage;
  book1:book;
  libro:string;
  nocMode: boolean=false
  backgroundColor: string = "white";
  textColor: string = "black";
  sizeText: string[] = ["x-small","medium","x-large"]
  textSize: string=this.sizeText[0];


  constructor(private testService: TestService, private router: ActivatedRoute, private _stts: TtsService) {
    this.authors=this.testService.authors;
   }

   findBook(title: string){
    this.authors.forEach(author => {
      let books = author.books;
      for (let index = 0; index < books.length; index++) {
        if (books[index].titulo==title) {
          this.book1=books[index]
          return books[index];
        }
     }
    });
  }
  
  speech(){
    let text: string;
    text=this.bookTitle[0]+" "+this.bookContent[0]+" ";
    for (let i = 1; i < this.bookContent.length; i++) {
      text=text+" "+this.bookTitle[i]+" "+this.bookContent[i]+" ";
    }
    console.log(text)
    //this._stts.discurso(text);
  }

  stopSpeech(){
    this._stts.discurso("");
  }

  readBook(){
    for (let i = 0; i < this.book1.capitulos.length; i++) {
      this.bookTitle.push(this.book1.capitulos[i].titulo);
      this.bookContent.push(this.book1.capitulos[i].contenido);
    }
  }

  ngOnInit() {
    this.router.paramMap.subscribe(params=>{
      this.libro= params.get('book')
    });
    this.findBook(this.libro)
    this.readBook();
    this.initalPage=this.bookTitle[0]
    this.initialContent=this.bookContent[0]
    
  }

  

  zoom(){
    this.textSize=this.sizeText[this.sizeText.indexOf(this.textSize)+1];
  }

  backPage(){
    if(this.bookTitle.indexOf(this.initalPage)>0){
      this.initalPage=this.bookTitle[this.bookTitle.indexOf(this.initalPage)-1];
      this.initialContent=this.bookContent[this.bookContent.indexOf(this.initialContent)-1]
    }
  }
  nextPage(){
    if(this.bookTitle.indexOf(this.initalPage)<this.bookTitle.length-1){
      this.initalPage=this.bookTitle[this.bookTitle.indexOf(this.initalPage)+1];
      this.initialContent=this.bookContent[this.bookContent.indexOf(this.initialContent)+1]
    }
  }

  noctMode(){
    if(this.nocMode==false){
      this.backgroundColor="#3b3a39"
      this.textColor="white"
      this.nocMode=true
    }else{
      this.backgroundColor="white"
      this.textColor="black"
      this.nocMode=false;
    }
  }

}
