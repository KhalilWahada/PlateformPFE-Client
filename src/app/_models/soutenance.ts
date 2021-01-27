import { Fiche } from '.';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

export class Soutenance {
    id: number;
    duree: number;
    dateSoutenance: Date;
    fichesoutenance: Fiche;
}
