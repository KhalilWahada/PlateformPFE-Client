import { Enseignant } from './enseignant';
import { Etudiant } from './etudiant';
import { Problematique } from './problematique';
import { Fonctionalite } from './fonctionalite';
import { Societe } from './societe';
import { Technologie } from './technologie';
import { EncadrantSociete } from './encadrant-societe';
import { AnnulationModifFiche } from './annulation-modif-fiche';

export class Fiche {

    idFiche: number;
    titre: string;
    description: string;
    asoutenir: string;
    motifEnseignant: string;
    status: string;
    encadrant_scolaire: Enseignant;
    etudiant: Etudiant;
    es: EncadrantSociete;
    tech: Technologie[];
    soc: Societe;
    foncts: Fonctionalite[];
    probs: Problematique[];
    amf: AnnulationModifFiche;

}
