import { User, Convention,Fiche } from '.';

export class Etudiant extends User {
    classe: String;
    numberEncadrement: number;
    newmail: String;
    authorized: Boolean;
    fichePFE: Fiche;
    conv: Convention;

	

}
