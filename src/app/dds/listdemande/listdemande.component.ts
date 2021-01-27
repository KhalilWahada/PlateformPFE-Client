import { Component, OnInit, Inject } from '@angular/core';
import { DdsService } from 'src/app/_services/dds.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-listdemande',
  templateUrl: './listdemande.component.html',
  styleUrls: ['./listdemande.component.css']
})
export class ListdemandeComponent implements OnInit {
  private id: number = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ddsService: DdsService) { }

  ngOnInit(): void {
    this.id = this.data.fichedetails.idFiche;
    
  }
  Accepter() {
    if (this.data.fichedetails.amf.etat==="annulation") {
      this.ddsService.annulerfiche(this.id).subscribe(data => console.log(data), error => console.log(error));
    }
    else if (this.data.fichedetails.amf.etat==="modification") {
      this.ddsService.accepterdemandemodificationfiche(this.id).subscribe(data => console.log(data), error => console.log(error));

    }
  }
    Refuser()
    {
      //   this.ddsService.re
    }
  
  
}
