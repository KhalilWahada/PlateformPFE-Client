import { Component, OnInit, ViewChild } from '@angular/core';
import { Convention } from 'src/app/_models';
import { MatTableDataSource } from '@angular/material/table';
import { DdsService } from 'src/app/_services/dds.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-listconvention',
  templateUrl: './listconvention.component.html',
  styleUrls: ['./listconvention.component.css']
})
export class ListconventionComponent implements OnInit {

  datas: MatTableDataSource<Convention>;

  constructor(public dialog: MatDialog, private ddsService: DdsService) {
    this.datas = new MatTableDataSource<Convention>();

  }
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    //* convention
     this.ddsService.getlistconv()
      .subscribe(data => {
        console.log(data)
        this.datas.data = data;
      }, error => console.log(error));
  }
  ngAfterViewInit() {
    this.datas.sort = this.sort;
    this.datas.paginator = this.paginator;
  }
  displayedColumns: string[] = ['mail', 'dds', 'dfs','societe'];
  /////
  openDialog(convention :Convention) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "550px";
   // this.dialog.open(FichedetailsComponent, { data: { fichedetails: fiche }, });
   // const dialogRef =this.dialog.open(HistoryComponent, { data: { fiche: fiche },
    //height: '900px',
    //width: '900px', });


   // dialogRef.afterClosed().subscribe(() => {
    //  this.refreshfiche();
    //  dialogRef.close();
   // });
    //this.dialog.open(SessionComponent, dialogConfig);
  }
  refreshfiche()
  {
    this.datas = new MatTableDataSource<Convention>();
    this.ddsService.getlistconv()
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
