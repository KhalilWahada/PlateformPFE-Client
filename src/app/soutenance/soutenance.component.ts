
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
  } from 'date-fns';
  import { Subject, Observable } from 'rxjs';
  import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
  import {
    CalendarEvent,
    CalendarEventAction,
    CalendarEventTimesChangedEvent,
    CalendarView,
  } from 'angular-calendar';
import { Session } from '../_models';
import { SessionService } from '../_services/session.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
  
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
     
      loadsoutenance()
      {
        
        this.sessionService.getsessionsall()
        .subscribe(data => {
          console.log(data)
          this.sessions = data;
        }, error => console.log(error)); 
        
  }
 
  fillevents(){ this.sessions.forEach(element => {
    this.addEvent(element);
  });
   
  }
  filtersLoaded: Promise<boolean>;

      sessions: Array<Session> =[];  
      session :Session = new Session() ;
                 

      
  
      events: CalendarEvent[] =[];
      activeDayIsOpen: boolean = true;
    
      constructor(private modal: NgbModal, private sessionService :SessionService, private route: ActivatedRoute) {}
      
    ngOnInit(): void {
     this.sessions=this.route.snapshot.data.sessions;
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
    
      eventTimesChanged({
        event,
        newStart,
        newEnd,
      }: CalendarEventTimesChangedEvent): void {
        this.events = this.events.map((iEvent) => {
          if (iEvent === event) {
            return {
              ...event,
              start: newStart,
              end: newEnd,
            };
          }
          return iEvent;
        });
        this.handleEvent('Dropped or resized', event);
      }
    
      handleEvent(action: string, event: CalendarEvent): void {
        this.modalData = { event, action };
        this.modal.open(this.modalContent, { size: 'lg' });
      }
    
      addEvent(s : Session): void {
        this.events = [
          ...this.events,
          {
            title: s.nom,
            start: startOfDay(new Date(s.dateDebut)),
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
    
      deleteEvent(eventToDelete: CalendarEvent) {
        this.events = this.events.filter((event) => event !== eventToDelete);
      }
      refreshevents(){this.events=[];
      this.loadsoutenance();
      this.fillevents();}
      setView(view: CalendarView) {
        this.refreshevents();
        this.view = view;
      }
    
      closeOpenMonthViewDay() {
        this.activeDayIsOpen = false;
      }
    }