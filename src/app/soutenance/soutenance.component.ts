
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
import { Session } from '../_models';
import { SessionService } from '../_services/session.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { SoutenanceService } from '../_services/soutenance.service';
import { Soutenance } from '../_models/soutenance';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreatesoutenanceComponent } from './createsoutenance/createsoutenance.component';

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
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
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

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {

    //  this.sess.dateDebut = newStart;
    //  this.sess.nom = "TEST MODIF";
    //newStart.setDate(newStart.getDate());
    // this.sessionService.createSession(this.sess)
    //   .subscribe(data => console.log(data), error => console.log(error));


    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        var tomorrow = newStart;
        tomorrow.setDate(tomorrow.getDate() + 1);
        this.session.dateDebut = tomorrow;
        this.sess.dateDebut = newStart;
        this.sess.nom = "TEST MODIF";
        this.sessionService.createSession(this.sess)
          .subscribe(data => console.log(data), error => console.log(error));
        newStart.setDate(newStart.getDate() - 1);
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }

      return iEvent;
    });
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(s: Soutenance): void {
    this.events = [
      ...this.events,
      {
        title: s.fichesoutenance.titre,
        start: startOfDay(new Date(s.dateSoutenance)),

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
    // this.session = this.sessionService.getsessions();

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