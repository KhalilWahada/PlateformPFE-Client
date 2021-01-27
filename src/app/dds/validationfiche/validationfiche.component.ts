import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DdsService } from 'src/app/_services/dds.service';

@Component({
  selector: 'app-validationfiche',
  templateUrl: './validationfiche.component.html',
  styleUrls: ['./validationfiche.component.css']
})
export class ValidationficheComponent implements OnInit {
  private id: number = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private ddsService:DdsService ) { }

  ngOnInit(): void {
    this.id = this.data.fichedetails.idFiche;

  }

  onvalidate()
  {
    this.ddsService.validatefiche(this.id).subscribe(data => console.log(data), error => console.log(error));   
  }
  onrefuse()
  {
    this.ddsService.refuserfiche(this.id).subscribe(data => console.log(data), error => console.log(error));   
  }
  annuler()
  {
    this.ddsService.annulerfiche(this.id).subscribe(data => console.log(data), error => console.log(error));   
  }
  affecter()
  {
    this.ddsService.affectationprof(this.id,1).subscribe(data => console.log(data), error => console.log(error));   
  }
}
