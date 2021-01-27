import { Component, OnInit, Inject } from '@angular/core';
import { CalendarEvent, CalendarMonthViewBeforeRenderEvent, CalendarView } from 'angular-calendar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DdsService } from 'src/app/_services/dds.service';
import { Session } from 'src/app/_models/session';


@Component({
  selector: 'app-sessioncurrent',
  templateUrl: './sessioncurrent.component.html',
  styleUrls: ['./sessioncurrent.component.css']
})
export class SessioncurrentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private ddsService:DdsService) { }
  cursession: Session;
  ngOnInit(): void {
    this.cursession = this.data.session;
  }
  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();
  events: CalendarEvent[] = [];

  beforeMonthViewRender(renderEvent: CalendarMonthViewBeforeRenderEvent): void {
     const debut = new Date(this.data.session.dateDebut);

    debut.setDate(debut.getDate() - 1);
    const fin = new Date(this.data.session.dateFin);

    fin.setDate(fin.getDate() + 1);
      renderEvent.body.forEach((day) => {
        if (day.date > debut  && day.date < fin){
          day.backgroundColor = "lightblue";
        }
      });
  
  }
}
