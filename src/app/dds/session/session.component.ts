import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../_services/session.service';
import { Session } from '../../_models/session';
import { Router } from '@angular/router';
@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  session: Session = new Session();
  submitted = false;
  satDatePicker: { begin: Date; end: Date; };
  dateRangeDisp: any;

  constructor(private sessionService: SessionService,
    private router: Router) { }

  ngOnInit() {
  }
  newSession(): void {
    this.submitted = false;
    this.session = new Session();
  }
  passtest(nsession: Session) {
    this.sessionService.createSession(nsession).subscribe((data) =>
      console.log(data));
    this.newSession();
  }
  save() {
    var debut = this.dateRangeDisp.begin;
    debut.setDate(debut.getDate() + 1);
    this.session.dateDebut = debut;
    var fin = this.dateRangeDisp.end;
    fin.setDate(fin.getDate() + 1);
    this.session.dateFin = fin;

    this.sessionService.createSession(this.session)
      .subscribe(data => console.log(data), error => console.log(error));
    this.session = new Session();
    // this.goto();

  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
  goto() {
    this.router.navigate(['/']);
  }
  saveDate(event: any) {
    // look at how the date is emitted from save
    console.log(event.target.value.begin);
    //this.session.dateDebut = event.target.value.begin;
    console.log(event.target.value.end);

    // change in view
    this.dateRangeDisp = event.target.value;


    // save date range as string value for sending to db
    // ... save to db
  }
}
