import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/_models';
import { SessionService } from 'src/app/_services/session.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-listsession',
  templateUrl: './listsession.component.html',
  styleUrls: ['./listsession.component.css']
})
export class ListsessionComponent implements OnInit {
  tabs = ['First', 'Second', 'Third'];
  selected = new FormControl(0);

  addTab() {
    this.tabs.push('New');
      this.selected.setValue(this.tabs.length - 1);
    }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
  sessions: Array<Session>;
   
  constructor(    
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



}