import { Component, OnInit } from '@angular/core';
import { Convention } from '../_models/convention';
import { ConventionService } from '../_services/convention.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-convention',
  templateUrl: './convention.component.html',
  styleUrls: ['./convention.component.scss']
})
export class ConventionComponent implements OnInit {

  convention: Convention = new Convention();
  submitted: boolean;
  con:Convention;

  
  constructor(private conventionService: ConventionService,
    private router: Router) { }

  ngOnInit(): void {
    this.con = new Convention();
    
    this.conventionService.getexist()
      .subscribe(data => {
        console.log(data)
        this.con = data;
      }, error => console.log(error));
    
  }
  newConvention():void {
    this.submitted = false;
    this.convention = new Convention();
  }
  save(){
    this.conventionService.createConvention(this.convention)
    .subscribe(data => console.log(data), error => console.log(error));
    this.convention = new Convention();
    this.goto();
    
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  goto() {
    this.router.navigate(['/']);
  }
}
