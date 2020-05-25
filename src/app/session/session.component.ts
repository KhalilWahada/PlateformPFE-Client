import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Session } from '../class/session';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  session: Session = new Session();
  submitted = false;

  constructor(private sessionService: SessionService,
    private router: Router) { }

  ngOnInit() {
  }

  newSession(): void {
    this.submitted = false;
    this.session = new Session();
  }
  passtest(nsession : Session)
  {
    this.sessionService.createSession(nsession).subscribe((data) => 
      console.log(data));
    this.newSession();
  }
  save() {
    this.sessionService.createSession(this.session)
    .subscribe(data => console.log(data), error => console.log(error));
    this.session = new Session ();
   // this.goto();

  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
goto() {
    this.router.navigate(['/']);
  }
}
