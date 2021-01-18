import { Injectable } from '@angular/core';
import { author } from '../models/author.model';
import { userFavorite } from '../models/userFavorite.model';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { CookieService } from 'ngx-cookie';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  keyUser = '&I%U%$234';

  private todosCollection: AngularFirestoreCollection<author>;
  todos: Observable<author[]>;

  private usersCollection: AngularFirestoreCollection<any>;
  userFavorites: Observable<any>;

  constructor(private CookieService: CookieService,private db: AngularFirestore, private auth: AngularFireAuth, private router: Router) {
    this.todosCollection = db.collection<author>('authors');
    this.todos = this.todosCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { ...data, id };
        });
      }
    ));

    this.usersCollection = db.collection('users');
    this.userFavorites = this.usersCollection.snapshotChanges().pipe(map(a => {
      return a.map(i => {
        const data = i.payload.doc.data();
        const id = i.payload.doc.id;
        return { ...data, id }
      })
    }))

  }

  añadirAutor(nombre:string, image:string, biography:string, birthDate:string){
    this.db.collection('authors').add({
      biography:biography,
      birthDate:birthDate,
      image:image,
      name: nombre
    })
  }

  añadirLibroAutor(autor:string){
    this.db.collection('authors').add({
      books:[{
        titulo:'',
        trivia:false,
        capitulos:[{
          titulo:''
        },{
          titulo:''
        }],
      }]
    })
  }

  añadirQuiz(autor:string){
    quizes:[{
      correctAnswer:'',
      option1:'',
      option2:'',
      option3:'',
      question:''
    }]
  }

  añadirLibro(uid: string, titulo: string, imagen: string) {
    this.db.collection('users').doc(uid).update({
      libros: firebase.firestore.FieldValue.arrayUnion({
        apunte: "",
        favorito: true,
        titulo: titulo,
        imagen: imagen,
      })
    })
  }

  añadirL(book:any) {
    this.db.collection('authors').doc("XtMPgxsmXP7jE8qpALXx").update({
      books: book
    })
  }

  eliminarLibro(uid: string, titulo: string, imagen: string, apunte: string) {
    this.db.collection('users').doc(uid).update({
      libros: firebase.firestore.FieldValue.arrayRemove({
        apunte: apunte,
        favorito: true,
        titulo: titulo,
        imagen: imagen,
      })
    })
  }

  guardarApunte(uid: string, apunte: string, apunteNuevo: string, titulo: string, imagen: string) {
    this.db.collection('users').doc(uid).update({
      libros: firebase.firestore.FieldValue.arrayRemove({
        apunte: apunte,
        favorito: true,
        titulo: titulo,
        imagen: imagen,
      })
    })

    this.db.collection('users').doc(uid).update({
      libros: firebase.firestore.FieldValue.arrayUnion({
        apunte: apunteNuevo,
        favorito: true,
        titulo: titulo,
        imagen: imagen,
      })
    })
  }

  getUserData(id: string) {
    return this.usersCollection.doc<userFavorite>(id).valueChanges();
  }
  // retorna toda la coleccion
  getTodos() {
    return this.todos;
  }
  // retorna autor por id
  getAuthor(id: string) {
    return this.todosCollection.doc<author>(id).valueChanges();
  }
  // crea usuario en firestore
  createUser(correo: string, contrasena: string) {
    return this.auth.createUserWithEmailAndPassword(correo, contrasena);
  }

  // login
  login(email: string, password: string) {
    return new Promise((resolve, rejected) => {
      this.auth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user)
      }).catch(err => rejected(err))
    });
  }

  logout() {
    this.CookieService.remove(this.keyUser);
    this.router.navigate(['/login']);




  /*  return this.auth.signOut().then(() => {
      this.router.navigate(['/login'])
    });*/
  }

  //estado del usuario
  stateUser() {
    return this.auth.authState;

  }

  // Crear usuario con lista de libros
  create(uid: string, contrasena:string) {
    let libros = [];
    return this.db.collection('users').doc(uid).set({ contrasena, libros });
  }

  validateUSER(email:string){

    var doc: Boolean;
    return this.usersCollection.doc<userFavorite>(email).get().toPromise().then(
      document=>{
       doc= document.exists
        return doc;
      }
    );
  }

}
