import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lectura-libro',
  templateUrl: './lectura-libro.page.html',
  styleUrls: ['./lectura-libro.page.scss'],
})
export class LecturaLibroPage implements OnInit {

  book: string[] = ["capitulo 1", "capitulo 2", "capitulo 3"]
  bookContent: string[] = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie felis vitae ante interdum, non mollis diam scelerisque. Mauris viverra id tortor ac finibus. Phasellus volutpat cursus nisi, vitae ultrices ex porta vel. Fusce lacus urna, fringilla malesuada pretium ut, lobortis quis tortor. Ut faucibus ex auctor quam euismod, eget efficitur dui pulvinar. In dictum rutrum tellus, pulvinar tempus lectus tempor sed. Proin at augue orci. Sed diam ligula, sollicitudin fermentum eleifend sed, placerat ac mi. Nulla fringilla pretium leo at posuere. Donec volutpat luctus justo, convallis hendrerit erat vehicula eu. Nullam id elementum ex. Pellentesque imperdiet odio vel arcu convallis vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer eleifend nisi et massa venenatis ultrices.","Integer lacinia ornare rutrum. Phasellus consectetur, mi semper porttitor tristique, justo augue dignissim dolor, suscipit euismod tellus augue non metus. Sed suscipit enim vel malesuada pretium. Sed tempus neque ac augue finibus luctus. In hac habitasse platea dictumst. Duis sed nulla nisl. Cras tempor semper augue sit amet dictum. Morbi sit amet ex quis leo finibus dignissim vel in augue. Mauris quis feugiat leo. Sed quis felis non risus laoreet viverra. Integer ac lacinia enim, viverra mollis erat. Maecenas eget lectus malesuada elit euismod consequat.","Proin eleifend varius ipsum, non dignissim nisl. Fusce efficitur dui ac leo accumsan hendrerit. Curabitur id lectus tristique erat consectetur placerat. Aliquam tempor malesuada eros ac euismod. Nam vestibulum neque ac nibh hendrerit consequat. Donec ornare nulla id fringilla mollis. Nunc libero ipsum, congue a consequat quis, maximus at arcu. Sed quis lorem et dolor pulvinar fermentum sed ac felis. Ut eros purus, fringilla ac metus id, pharetra tempor nunc. Nullam mauris urna, porta in orci eu, consequat tristique neque. Donec eu purus blandit, iaculis ipsum ac, rhoncus diam. Nulla magna augue, faucibus ac odio eu, eleifend consequat ligula. Pellentesque purus metus, dignissim ut sollicitudin eu, tincidunt condimentum lorem. Donec a dolor magna. Sed vulputate mi cursus, rutrum elit sit amet, dapibus dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
  initialContent=this.bookContent[0]
  initalPage=this.book[0]
  constructor() { }
  nocMode: boolean=false
  backgroundColor: string = "white";
  textColor: string = "black";
  sizeText: string[] = ["x-small","medium","x-large"]
  textSize: string=this.sizeText[0];

  ngOnInit() {
  }

  zoom(){
    this.textSize=this.sizeText[this.sizeText.indexOf(this.textSize)+1];
  }

  backPage(){
    if(this.book.indexOf(this.initalPage)>0){
      this.initalPage=this.book[this.book.indexOf(this.initalPage)-1];
      this.initialContent=this.bookContent[this.bookContent.indexOf(this.initialContent)-1]
    }
  }
  nextPage(){
    if(this.book.indexOf(this.initalPage)<this.book.length-1){
      this.initalPage=this.book[this.book.indexOf(this.initalPage)+1];
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
