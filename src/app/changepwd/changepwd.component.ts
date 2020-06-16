import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { first, delayWhen } from 'rxjs/operators';
@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html',
  styleUrls: ['./changepwd.component.scss']
})
export class ChangepwdComponent implements OnInit {
  user: User = new User();
  submitted: boolean;
  al:boolean;
  al2:boolean;
  repeat:string;
  returnUrl: string;
  error = '';

  constructor(private authenticationService: AuthenticationService,
    private router: Router) {
      this.authenticationService.currentUser.subscribe(x => this.user = x);

     }

  ngOnInit(): void {
  }
  onSubmit() {
   
    this.al=false;
    this.al2=false;
    //this.updatepwd();    
    this.validateform();
  }

  updatepwd() {
    this.authenticationService.updatepwd(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
      
     // this.authenticationService.login(this.user.code,this.user.password);
      this.authenticationService.loginchange(this.user.code, this.user.password)
      .pipe(first())
      .subscribe(
          data => {
              this.router.navigate([this.returnUrl]);
          },
          error => {
              this.error = error;
              
          });
    this.user = new User();
    this.goto();
  }
  goto() {
    this.router.navigate(['/']);
    
  }

   validateform(){    
    if(this.user.password.length<6){
      this.al2=true;
      return false;
    }
    if(this.user.password!=this.repeat){
     this.al=true;  
      return false;}

      this.submitted = true;
      this.updatepwd();
      
     } 


}
