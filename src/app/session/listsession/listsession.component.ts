import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/_models';
import { SessionService } from 'src/app/_services/session.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { SessionComponent } from '../session.component';

@Component({
  selector: 'app-listsession',
  templateUrl: './listsession.component.html',
  styleUrls: ['./listsession.component.css']
})
export class ListsessionComponent implements OnInit {
 
  sessions: Array<Session>;
   
  constructor( public dialog: MatDialog,    
    private sessionService : SessionService) { }
  session : Session; 
  ngOnInit(): void {
    this.session = new Session();
    
    this.sessionService.getsessionsall()
      .subscribe(data => {
        console.log(data)
        this.sessions = data;
      }, error => console.log(error));
     
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "550px";

    const dialogRef =    this.dialog.open(SessionComponent, dialogConfig);



    dialogRef.afterClosed().subscribe(() => {
      this.refreshsession();
      dialogRef.close();
    });
  }
  refreshsession() {
    this.sessionService.getsessionsall()
    .subscribe(data => {
      console.log(data)
      this.sessions = data;
    }, error => console.log(error));
     }

 
}
