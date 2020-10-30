import { Injectable } from '@angular/core';
import { book } from '../models/libro.model';
import {author} from '../models/author.model';
import{userFavorite} from '../models/userFavorite.model';
import { quiz } from '../models/quiz.model';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { AngularFireAuth } from '@angular/fire/auth';
import { promise, element } from 'protractor';
import { user } from '../models/usuario.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  authors: author[]=[{
    name:"Carlo collodi",
    image:"https://www.elsiglodetorreon.com.mx/m/i/2017/10/992228.jpeg",
    biography: "Carlo Collodi nació el 24 de noviembre de 1826 en Florencia, Italia Fue uno de los diez hijos del cocinero Domenico Lorenzini y de María Angela Carolina Orzali, empleada doméstica que trabajó en el servicio del Marqués Ginori, junto con su marido. Pudo estudiar gracias a la ayuda de la familia Ginori. Desde 1837 hasta 1842 permaneció en el seminario en Colle di Val d'Elsa. Entre 1842 y 1844, cursó estudios de Retórica y Filosofía en Florencia, en una escuela religiosa de los Escolapios. Trabajó en la Biblioteca Piatti de Florencia hasta 1848 en que se une al ejército del rey Carlos de Cerdeña en el levantamiento contra Austria. Influido por los ideales políticos de Giuseppe Mazzini, Collodi plasmó en sus obras la doctrina liberal de este gran líder de la Italia Unificada. Creó el periódico satírico Il Lampione, prohibido en 1849. En 1853 fundó La Scaramuccia, para el que escribió hasta 1859. Se unió a las fuerzas militares de Giuseppe Garibaldi y relanzó Il Lampione, ya bajo el seudónimo de Collodi (por el lugar donde nació su madre). En 1860 trabajó como funcionario en Florencia.En 1877 inició las series de cuentos educativos sobre Gianettino (Juanito), el último apareció en 1890. Pinocho, apareció en julio de 1881 en el semanario para niños Giornale per i Bambini, con el título de Storia di un Burattino (Historia de un muñeco). En 1883 se editaron Las aventuras de Pinocho. Se dice que Carlo Collodi ingresó a la Masonería a mediados del siglo XIX, aunque no hay ningún documento que lo sostenga, y que esta organización tuvo influencia importante en su obra más notable (Pinocho), en la que se supone que se encuentran interesantes simbolismos. La popularidad Pinocho experimentó un gran auge en 1940 con el estreno de la película animada de Walt Disney. Carlo Collodi falleció en Florencia el 26 de octubre de 1890 ",
    birthDate: "24 de noviembre de 1826",
    books:[{
      titulo: "Los tres cerditos",
      capitulos:[{
        titulo: "capitulo 1",
        contenido: "En el corazón del bosque vivían tres cerditos que eran hermanos. El lobo siempre andaba persiguiéndolos para comérselos. Para escapar del lobo, los cerditos decidieron hacerse una casa. El pequeño la hizo de paja, para acabar antes y poder irse a jugar. El mediano construyó una casa de madera. Al ver que su hermano pequeño había terminado ya, se dio prisa para irse a jugar con él. El mayor trabajaba en su casa de ladrillo. - Ya veréis lo que hace el lobo con vuestras casasriñó a sus hermanos mientras éstos se lo pasaban en grande"
      },{
        titulo: "capitulo 2",
        contenido: "El lobo salió detrás del cerdito pequeño y él corrió hasta su casa de paja, pero el lobo sopló y sopló y la casa de paja derrumbó. El lobo persiguió al cerdito por el bosque, que corrió a refugiarse en casa de su hermano mediano. Pero el lobo sopló y sopló y la casa de madera derribó.Los dos cerditos salieron corriendo de allí. Casi sin aliento, con el lobo pegado a sus talones,llegaron a la casa del hermano mayor. Los tres se metieron dentro y cerraron bien todas las puertas y ventanas. El lobo se puso a dar vueltas a la casa, buscando algún sitio por el que entrar. Con una escalera larguísima trepó hasta el tejado, para colarse"
      },{
        titulo: "capitulo 3",
        contenido: "por la chimenea. Pero el cerdito mayor puso al fuego una olla con agua. El lobo comilón descendió por el interior de la chimenea, pero cayó sobre el agua hirviendo y se quemó. Escapó de allí dando unos terribles aullidos que se oyeron en todo el bosque. Se cuenta que nunca jamás quiso comer cerditos."
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
        option3: "Es un holograma",
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
    biography: "unavailable",
    birthDate: "24 de noviembre de 1826",
    books:[{
      titulo: "Mafalda",
      capitulos:[{
        titulo: "capitulo 1",
        contenido: "lorem"
      }],
      imagen: "../../../assets/images/Mafalda.jpg",
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
    biography: "unavailable",
    birthDate: "24 de noviembre de 1826",
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
    biography: "unavailable",
    birthDate: "24 de noviembre de 1826",
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
  
  private usersCollection: AngularFirestoreCollection<any>;
  userFavorites: Observable<any>;
 
  constructor(private db: AngularFirestore, private auth: AngularFireAuth, private router: Router) { 
    this.todosCollection = db.collection<author>('authors');
    this.todos=this.todosCollection.snapshotChanges().pipe(map(
      actions=>{
        return actions.map(a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {...data, id};
        });
      }
    ));

    this.usersCollection = db.collection('usersTest');
    this.userFavorites= this.usersCollection.snapshotChanges().pipe(map(a=>{
      return a.map(i=>{
        const data=i.payload.doc.data();
        const id = i.payload.doc.id;
        return {...data, id}
      })
    }))

  }

  getUserData(id: string){
    //return this.db.collection('usersTest').doc(id).snapshotChanges();
    return this.usersCollection.doc<userFavorite>(id).valueChanges();
 }
// retorna toda la coleccion
  getTodos(){
    return this.todos;
  }
// retorna autor por id
  getAuthor(id:string){
    return this.todosCollection.doc<author>(id).valueChanges();
  }
// crea usuario en firestore
   createUser(correo:string, contrasena:string){
    return this.auth.createUserWithEmailAndPassword(correo,contrasena);
   }

// login
   login(email: string, password: string){
     return new Promise((resolve, rejected)=>{
      this.auth.signInWithEmailAndPassword(email,password).then(user=>{
        resolve(user)
      }).catch(err=>rejected(err))
     });
  }

  logout(){
    return this.auth.signOut().then(()=>{
      this.router.navigate(['/login'])
    });
  }

  //estado del usuario

  stateUser(){
    return this.auth.authState;

  }

  

// envia datos a la tabla del usuario
   postUserDoc(uid:string, doc:author[]){

      this.db.collection('users').doc(uid).set({doc});
   }


// Crear usuario con lista de libros
   create(uid: string){
    let aux=this.getTodos();
    let libros=[];
    aux.forEach(e => {
      for (let i = 0; i < e.length; i++) {
        for (let j = 0; j < e[i].books.length; j++) {
          libros.push({titulo:e[i].books[j].titulo,
            imagen: e[i].books[j].imagen, 
            apunte:"",
            favorito:false
          })
        }
      }
      this.db.collection('usersTest').doc(uid).set({libros});
    });

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
