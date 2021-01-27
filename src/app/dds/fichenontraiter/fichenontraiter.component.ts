import { Component, OnInit, ViewChild } from '@angular/core';
import { Fiche } from 'src/app/_models';
import { FicheService } from 'src/app/_services/fiche.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { from } from 'rxjs';
import { SessionComponent } from 'src/app/dds/session/session.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Positioning, positionElements } from '@ng-bootstrap/ng-bootstrap/util/positioning';
import { FichedetailsComponent } from 'src/app/dds/fichedetails/fichedetails.component';
import { DdsService } from 'src/app/_services/dds.service';
import { ValidationficheComponent } from '../validationfiche/validationfiche.component';

@Component({
  selector: 'app-fichenontraiter',
  templateUrl: './fichenontraiter.component.html',
  styleUrls: ['./fichenontraiter.component.css']
})
export class FichenontraiterComponent implements OnInit {

  datas: MatTableDataSource<Fiche>;

  constructor(public dialog: MatDialog, private ddsService: DdsService) {
    this.datas = new MatTableDataSource<Fiche>();

  }
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    // 
    this.ddsService.getfichenontraiter()
      .subscribe(data => {
        console.log(data)
        this.datas.data = data;
      }, error => console.log(error));
  }
  ngAfterViewInit() {
    this.datas.sort = this.sort;
    this.datas.paginator = this.paginator;
  }
  displayedColumns: string[] = ['idFiche', 'titre', 'status', 'action'];
  /////
  openDialog(fiche: Fiche) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "550px";
    // this.dialog.open(FichedetailsComponent, { data: { fichedetails: fiche }, });
    const dialogRef = this.dialog.open(FichedetailsComponent, { data: { fichedetails: fiche }, });


    dialogRef.afterClosed().subscribe(() => {
      this.refreshfiche();
      dialogRef.close();
    });
    //this.dialog.open(SessionComponent, dialogConfig);
  }

  refreshfiche() {
    this.datas = new MatTableDataSource<Fiche>();
    this.ddsService.getfichenontraiter()
      .subscribe(data => {
        console.log(data)
        this.datas.data = data;
      }, error => console.log(error));
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datas.filter = filterValue.trim().toLowerCase();
  }
  openFiche(fiche: Fiche) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "550px";
    let dialogRef = null;
    // this.dialog.open(FichedetailsComponent, { data: { fichedetails: fiche }, });
    dialogRef = this.dialog.open(ValidationficheComponent, {
      data: { fichedetails: fiche },
      minHeight: '400px',
      maxHeight: '900px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.refreshfiche();
      dialogRef.close();
    });
  }
}
