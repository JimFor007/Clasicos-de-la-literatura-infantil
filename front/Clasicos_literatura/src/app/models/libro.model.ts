import { quiz } from './quiz.model';
import { capitulo } from './capitulo.model';

export class book  {
    titulo: string;
    capitulos: capitulo[];
    imagen: string;
    trivia: boolean;
    favorito: boolean;
    quizes: quiz[];
    apunte: string;
}