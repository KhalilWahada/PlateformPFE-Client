
import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
  startOfMonth,
  startOfWeek,
  endOfWeek,
  isThisSecond,
  isTomorrow,
} from 'date-fns';
import { Subject, Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
  CalendarMonthViewBeforeRenderEvent,
} from 'angular-calendar';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreatesoutenanceComponent } from '../createsoutenance/createsoutenance.component';
import { Session } from 'src/app/_models';
import { Soutenance } from 'src/app/_models/soutenance';
import { SoutenanceService } from 'src/app/_services/soutenance.service';
import { SessionService } from 'src/app/_services/session.service';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-soutenance',
  templateUrl: './soutenance.component.html',
  styleUrls: ['./soutenance.component.css']
})
export class SoutenanceComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.deleteEvent(event);
      },
    },
  ];
  refresh: Subject<any> = new Subject();

  loadsoutenance() {

    this.soutenanceService.getlistsoutenance()
      .subscribe(data => {
        console.log(data)
        this.soutenances = data;
      }, error => console.log(error));

  }

  fillevents() {
    // this.sessions.forEach(element => {
    //this.addEvent(element);
    this.soutenances.forEach(element => {
      this.addEvent(element);
    });

  }
  filtersLoaded: Promise<boolean>;

  sessions: Array<Session> = [];
  session: Session = new Session();
  soutenances: Array<Soutenance> = [];
  soutenance: Soutenance = new Soutenance();



  events: CalendarEvent[] = [];
  activeDayIsOpen: boolean = true;

  constructor(public dialog: MatDialog, private modal: NgbModal, private soutenanceService: SoutenanceService, private sessionService: SessionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.soutenances = this.route.snapshot.data.soutenances;
    this.fillevents();

  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  sess = new Session();
  //  public number getsoutenanceidbyfichetitre(cherche: string) {
  //   return 1;
  // }
  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {

    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        //this.fillsoutenance(this.soutenances[this.events.indexOf(iEvent)].fichesoutenance.idFiche);
        this.soutenances.map((isoutenance) => {
          if (isoutenance.fichesoutenance.titre === event.title)
          //this.fillsoutenance(this.soutenances[this.events.indexOf(iEvent)].fichesoutenance.idFiche);
          {
            this.soutenance.id = isoutenance.id;
            this.soutenance.dateSoutenance = newStart;
            this.soutenance.duree = (newEnd.getHours() * 60 + newEnd.getUTCMinutes()) - (newStart.getHours() * 60 + newStart.getMinutes());
            this.soutenanceService.modifdate(this.soutenance.id, this.soutenance)
              .subscribe(data => console.log(data));
          }
        });/*{
          this.soutenance.dateSoutenance = newStart;
        this.soutenance.duree = newEnd.getMinutes() - newStart.getMinutes();
        this.soutenanceService.modifdate(2, this.soutenance)
          .subscribe(data => console.log(data));
      }*/
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });

  }

  fillsoutenance(id: number): void {
    this.soutenanceService.getfichesoutenance(id)
      .subscribe(data => {
        console.log(data)
        this.soutenance = data;
      }, error => console.log(error));

  }
  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(s: Soutenance): void {
    const df = new Date(s.dateSoutenance);

    df.setTime(df.getTime() + s.duree * 60000);
    this.events = [
      ...this.events,
      {
        title: s.fichesoutenance.titre,
        start: new Date(s.dateSoutenance),
        end: df,
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
        actions: this.actions,

      },
    ];
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "550px";

    this.dialog.open(CreatesoutenanceComponent, dialogConfig);


  }

  deleteEvent(eventToDelete: CalendarEvent) {

    this.events = this.events.filter((event) => event !== eventToDelete);
    this.soutenances.map((isoutenance) => {
      if (isoutenance.fichesoutenance.titre==eventToDelete.title)
      //this.fillsoutenance(this.soutenances[this.events.indexOf(iEvent)].fichesoutenance.idFiche);
      {
        this.soutenanceService.anuulersoutenance(isoutenance.id)
          .subscribe(data => console.log(data));
      }
      // this.session = this.sessionService.getsessions();

    });
  }

  refreshevents() {
    this.events = [];
    this.loadsoutenance();
    this.fillevents();
  }
  setView(view: CalendarView) {

    //    this.refreshevents();
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}