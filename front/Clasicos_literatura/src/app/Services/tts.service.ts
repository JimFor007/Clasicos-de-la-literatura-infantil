import { Injectable } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Injectable({
  providedIn: 'root'
})
export class TtsService {

  constructor(private _tts: TextToSpeech) { }

  discurso(texto:string){
    this._tts.speak({
      text:texto,
      locale:'es-CO',
      rate:0.95
    }).then(()=> console.log("funciona")
    ).catch((resp:any)=>console.log(resp));
  }

}
