import { Component, OnInit, ViewChild } from '@angular/core';
import { Fiche } from 'src/app/_models';
import { FicheService } from 'src/app/_services/fiche.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { from } from 'rxjs';
import { SessionComponent } from 'src/app/session/session.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Positioning, positionElements } from '@ng-bootstrap/ng-bootstrap/util/positioning';
import { FichedetailsComponent } from 'src/app/fichedetails/fichedetails.component';

@Component({
  selector: 'app-listfiche',
  templateUrl: './listfiche.component.html',
  styleUrls: ['./listfiche.component.css']
})
export class ListficheComponent implements OnInit {
  //
  datas: MatTableDataSource<Fiche>;

  constructor(public dialog: MatDialog, private ficheService: FicheService) {
    this.datas = new MatTableDataSource<Fiche>();

  }
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    // 
    this.ficheService.getddsFiche()
      .subscribe(data => {
        console.log(data)
        this.datas.data = data;
      }, error => console.log(error));
  }
  ngAfterViewInit() {
    this.datas.sort = this.sort;
    this.datas.paginator = this.paginator;
  }
  displayedColumns: string[] = ['idFiche', 'titre', 'status','action'];
  /////
  openDialog(fiche :Fiche) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "550px";
   // this.dialog.open(FichedetailsComponent, { data: { fichedetails: fiche }, });
    const dialogRef =this.dialog.open(FichedetailsComponent, { data: { fichedetails: fiche }, });


    dialogRef.afterClosed().subscribe(() => {
      this.refreshfiche();
      dialogRef.close();
    });
    //this.dialog.open(SessionComponent, dialogConfig);
  }
  refreshfiche()
  {
    this.datas = new MatTableDataSource<Fiche>();
    this.ficheService.getddsFiche()
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
