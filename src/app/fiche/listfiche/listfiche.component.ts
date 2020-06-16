import { Component, OnInit, ViewChild } from '@angular/core';
import { Fiche } from 'src/app/_models';
import { FicheService } from 'src/app/_services/fiche.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { from } from 'rxjs';
import { SessionComponent } from 'src/app/session/session.component';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { Positioning, positionElements } from '@ng-bootstrap/ng-bootstrap/util/positioning';

@Component({
  selector: 'app-listfiche',
  templateUrl: './listfiche.component.html',
  styleUrls: ['./listfiche.component.css']
})
export class ListficheComponent implements OnInit {
  //
  Fiches : Array<Fiche>;
  datas : MatTableDataSource<Fiche>;
  
  constructor(public dialog: MatDialog,private ficheService : FicheService) {
    this.datas = new MatTableDataSource<Fiche>();

  }
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
   // 
    this.ficheService.getddsFiche()
    .subscribe(data => {
      console.log(data)
      this.datas.data = data;
    }, error => console.log(error));
  }
  ngAfterViewInit (){
    this.datas.sort = this.sort;
  }
  displayedColumns: string[] = ['idFiche','titre', 'status'];
 /////
 openDialog() {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "50%";
  dialogConfig.position ={ top: '50px', left: '50px' };
 
  this.dialog.open(SessionComponent,dialogConfig);
}
showDialog: boolean = false;

}
