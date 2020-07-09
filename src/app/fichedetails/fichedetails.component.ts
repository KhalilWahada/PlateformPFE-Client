import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FicheService } from '../_services/fiche.service';
import { Fiche } from '../_models';

@Component({
  selector: 'app-fichedetails',
  templateUrl: './fichedetails.component.html',
  styleUrls: ['./fichedetails.component.css']
})
export class FichedetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private ficheService:FicheService) { }
  private id: number = 0;
  private fichedetail: Fiche = new Fiche();
  ngOnInit(): void {
    this.id = this.data.fichedetails.idFiche;
  }

  onvalidate()
  {
    this.ficheService.validatefiche(this.id).subscribe(data => console.log(data), error => console.log(error));   
  }
}
