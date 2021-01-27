import { User } from './user';
import { Fiche } from '.';

export class Enseignant extends User {
    Fiches: Fiche[];
    numberEncadrement: number;
    numberEncadrementT: number;
    isactive: Boolean;
}
