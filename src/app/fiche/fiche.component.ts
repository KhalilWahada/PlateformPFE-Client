import { Component, OnInit } from '@angular/core';
import { Fiche } from '../fiche';
import { FicheService } from '../fiche.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.scss']
})
export class FicheComponent implements OnInit {

  fiche: Fiche = new Fiche();
  submitted: boolean;
  buttonType: any;
  fic: Fiche;
  dep:boolean =false;
  acc:boolean = false;


  constructor(private ficheService: FicheService,
    private router: Router) { }

  ngOnInit(): void {

    this.fic = new Fiche();

    
    this.ficheService.getFiche()
      .subscribe(data => {
        console.log(data)
        this.fic = data;
        if(this.fic.status==="deposed"){
          this.dep=true;
        }
        if(this.fic.status==="accepted"){
          this.acc=true;
        }
      }, error => console.log(error));

    


  }
  save(){
    this.ficheService.savefiche(this.fiche)
    .subscribe(data => console.log(data), error => console.log(error));
    this.fiche = new Fiche();
    this.goto();
    
  }
  create(){
    this.ficheService.createfiche(this.fiche)
    .subscribe(data => console.log(data), error => console.log(error));
    this.fiche = new Fiche();
    this.goto();
    
  }
  onSubmit(buttonType): void {
    if(buttonType==="save") {
      this.submitted = true;
      this.save();  
  }
  if(buttonType==="depose"){
    this.submitted = true;
    this.create();  
  }
     
  }
  goto() {
    this.router.navigate(['/']);
  }


  onSubmit1(buttonType): void {
  if(buttonType==="save") {
      this.submitted = true;
      this.updateFiche();  
  }

  if(buttonType==="depose"){
    this.submitted = true;
    this.updateFichedep();  
  }
}
updateFiche() {
  this.ficheService.updatefiche(this.fic)
    .subscribe(data => console.log(data), error => console.log(error));
  this.fic = new Fiche();
  this.goto();
}
updateFichedep() {
  this.ficheService.updatefichedep(this.fic)
    .subscribe(data => console.log(data), error => console.log(error));
  this.fic = new Fiche();
  this.goto();
}




}
