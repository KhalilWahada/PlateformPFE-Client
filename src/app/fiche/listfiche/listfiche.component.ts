import { Component, OnInit, ViewChild } from '@angular/core';
import { Fiche } from 'src/app/_models';
import { FicheService } from 'src/app/_services/fiche.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { from } from 'rxjs';

@Component({
  selector: 'app-listfiche',
  templateUrl: './listfiche.component.html',
  styleUrls: ['./listfiche.component.css']
})
export class ListficheComponent implements OnInit {
  //
  Fiches : Array<Fiche>;
  datas : MatTableDataSource<Fiche>;
  constructor(private ficheService : FicheService) {
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
 

}
