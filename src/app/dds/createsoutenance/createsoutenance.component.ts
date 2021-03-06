import { Component, OnInit } from '@angular/core';
import { Soutenance } from 'src/app/_models/soutenance';
import { SoutenanceService } from 'src/app/_services/soutenance.service';
import { Router } from '@angular/router';
import { FicheService } from 'src/app/_services/fiche.service';
import { Fiche } from 'src/app/_models';
import { SoutenanceComponent } from '../soutenance/soutenance.component';
import { Subject } from 'rxjs';
import { DdsService } from 'src/app/_services/dds.service';

@Component({
  selector: 'app-createsoutenance',
  templateUrl: './createsoutenance.component.html',
  styleUrls: ['./createsoutenance.component.css']
})
export class CreatesoutenanceComponent implements OnInit {
  dates: Date[];
  soutenance: Soutenance = new Soutenance();
  submitted = false;
  satDatePicker: { begin: Date; end: Date; };
  dateRangeDisp: any;

  constructor(private dds: DdsService, private fs: FicheService, private soutenanceService: SoutenanceService,
    private router: Router) { }
  refresh: Subject<any> = new Subject();

  ngOnInit() {

    this.fs.getddsFiche()
      .subscribe(data => {
        console.log(data)
        this.fiches = data;
      }, error => console.log(error));
    this.dds.getpossibledate(1).subscribe(data => {
      console.log(data)
      this.dates = data;
    }, error => console.log(error));
  }
  newSession(): void {
    this.submitted = false;
    this.soutenance = new Soutenance();
  }
  fiches: Fiche[] = [];
  fiche: Fiche = new Fiche();
  save() {
    //var tomorrow = this.soutenance.dateSoutenance;
    //tomorrow.setDate(tomorrow.getDate() + 1);
    this.fiche = this.fiches[0];
    this.soutenance.fichesoutenance = this.fiche;
    //this.soutenance.dateSoutenance = tomorrow;
    this.soutenanceService.createSoutenance(this.soutenance)
      .subscribe(data => console.log(data));
    this.soutenance = new Soutenance();

    // this.goto();

  }

  onSubmit() {
    this.submitted = true;
    this.save();

  }


}
