import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FicheService } from '../../_services/fiche.service';
import { Fiche } from '../../_models';
import { DdsService } from '../../_services/dds.service';

@Component({
  selector: 'app-fichedetails',
  templateUrl: './fichedetails.component.html',
  styleUrls: ['./fichedetails.component.css']
})
export class FichedetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private ficheService:FicheService,private ddsService:DdsService ) { }
  fichedetails: Fiche;
  ngOnInit(): void {
    this.fichedetails = this.data.fichedetails;
  }

}
