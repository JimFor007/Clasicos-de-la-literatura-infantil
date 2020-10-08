import { Component, OnInit } from '@angular/core';
import { TestService } from '../Services/test.service';
import { author } from '../models/author.model';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore'
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

authors: author[];


  constructor(private test: TestService, db: AngularFirestore) {
    /*
    -------//--CON ESTA LINEA SE AGREGA LOS DATOS A FIRESTORE ( IMPORTANTE: DEJARLO COMENTADO POR SI SE LLEGA A BORRAR DEL FIRESTORE) //--------------
    
    this.authors = test.authors;
    console.log(this.authors); 
    for(let i=0 ; i<this.authors.length ; i++){
    db.collection('authors')
                .add(this.authors[i]);
    console.log('posicion' , i , 'agregada');
    }*/

  }

  ngOnInit() {

  }


}
