import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/authentication.service';
import { User } from '../_models/user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  admin: boolean =false;
  student: boolean =false;
  dds: boolean =false;
  ens: boolean =false;

  constructor(
    private router: Router,
        private authenticationService: AuthenticationService
  ) { 
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    switch (this.currentUser.role){
      case "etudiant":
        this.student=true;
        break;
      case "administrateur":
        this.admin=true;
        break;
      case "enseignant":
        this.ens=true;
        break;   
      case "direction de stage":
        this.dds=true;
        break;      
    }
  }

  ngOnInit(): void {
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}

}
