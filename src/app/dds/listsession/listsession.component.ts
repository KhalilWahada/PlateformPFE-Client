import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/_models';
import { SessionService } from 'src/app/_services/session.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { CalendarEvent, CalendarMonthViewBeforeRenderEvent } from 'angular-calendar/modules/calendar.module';
import { SessionComponent } from '../session/session.component';
import { getDate } from 'date-fns';
import { SessioncurrentComponent } from '../sessioncurrent/sessioncurrent.component';

@Component({
  selector: 'app-listsession',
  templateUrl: './listsession.component.html',
  styleUrls: ['./listsession.component.css']
})
export class ListsessionComponent implements OnInit {

  sessions: Array<Session>;

  constructor(public dialog: MatDialog,
    private sessionService: SessionService) { }
  session: Session;
  cursession : Session;
  nextsession : Session;

  ngOnInit(): void {
    this.session = new Session();

    this.sessionService.getsessionsall()
      .subscribe(data => {
        console.log(data)
        this.sessions = data;
      }, error => console.log(error));
  }
  
  currentsession()
  { 

    const today: Date = new Date();
    this.cursession = null;
    this.nextsession = null;
    this.sessions.forEach((session) => {
      if (today > new Date(session.dateDebut)) {
        if (today < new Date(session.dateFin)) {
          this.cursession = session;
          this.opencurrent(this.cursession);
          return;
        }
      }
    });
    //this.opencurrent(this.cursession);
  }
  opencurrent(session:Session) {
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "900px";
    dialogConfig.height = "900px";
  
    

    const dialogRef = this.dialog.open(SessioncurrentComponent, {
      data: { session: session }, minHeight: '650px',
      maxHeight:'750px',
    width: '800px', },);
    
  }


  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "550px";

    const dialogRef = this.dialog.open(SessionComponent, dialogConfig);



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
