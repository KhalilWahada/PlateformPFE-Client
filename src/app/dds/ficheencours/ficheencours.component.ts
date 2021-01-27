import { Component, OnInit, ViewChild } from '@angular/core';
import { Fiche } from 'src/app/_models';
import { FicheService } from 'src/app/_services/fiche.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { from } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Positioning, positionElements } from '@ng-bootstrap/ng-bootstrap/util/positioning';
import { FichedetailsComponent } from 'src/app/dds/fichedetails/fichedetails.component';
import { DdsService } from 'src/app/_services/dds.service';
import { Etudiant } from 'src/app/_models/etudiant';
import { EtudiantdetailsComponent } from '../etudiantdetails/etudiantdetails.component';
import { ListdemandeComponent } from '../listdemande/listdemande.component';


@Component({
  selector: 'app-ficheencours',
  templateUrl: './ficheencours.component.html',
  styleUrls: ['./ficheencours.component.css']
})
export class FicheencoursComponent implements OnInit {
  datas: MatTableDataSource<Fiche>;

  constructor(public dialog: MatDialog, private ddsService: DdsService) {
    this.datas = new MatTableDataSource<Fiche>();

  }
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    // 
    this.refreshfiche();

  }
  ngAfterViewInit() {
    this.datas.sort = this.sort;
    this.datas.paginator = this.paginator;
  }
  displayedColumns: string[] = ['idFiche', 'titre', 'status', 'action'];
  /////
  openFiche(fiche: Fiche) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "550px";
    let dialogRef = null;
    if (fiche.amf == null) {   dialogRef =    this.dialog.open(FichedetailsComponent, { data: { fichedetails: fiche }, });
  }
    else {
     dialogRef = this.dialog.open(ListdemandeComponent, {
        data: { fichedetails: fiche },
        minHeight: '400px',
        maxHeight: '900px',
        width: '900px',
      });

    }
        dialogRef.afterClosed().subscribe(() => {
      this.refreshfiche();
      dialogRef.close();
    });
    //this.dialog.open(SessionComponent, dialogConfig);
  }
  openstudent(etudiant: Etudiant) {


    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "550px";
    
    // this.dialog.open(FichedetailsComponent, { data: { fichedetails: fiche }, });
    const dialogRef = this.dialog.open(EtudiantdetailsComponent, { data: { etudiant: etudiant }, });


    dialogRef.afterClosed().subscribe(() => {
      this.refreshfiche();
      dialogRef.close();
    });
    //this.dialog.open(SessionComponent, dialogConfig);


  }
  detail: boolean = false;
  closedialog() { this.dialog.closeAll(); }
  refreshfiche() {
    this.datas = new MatTableDataSource<Fiche>();
    this.ddsService.getfichetraiter()
      .subscribe(data => {
        console.log(data)
        this.datas.data = data;
      }, error => console.log(error));
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datas.filter = filterValue.trim().toLowerCase();
  }
}

