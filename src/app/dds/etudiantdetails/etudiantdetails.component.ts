import { Component, OnInit, Inject } from '@angular/core';
import { DdsService } from 'src/app/_services/dds.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Etudiant } from 'src/app/_models/etudiant';

@Component({
  selector: 'app-etudiantdetails',
  templateUrl: './etudiantdetails.component.html',
  styleUrls: ['./etudiantdetails.component.css']
})
export class EtudiantdetailsComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private ddsService:DdsService) { }
   etudiant: Etudiant;
  ngOnInit(): void {
    this.etudiant = this.data.etudiant;
  }

}
