import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantdetailsComponent } from './etudiantdetails.component';

describe('EtudiantdetailsComponent', () => {
  let component: EtudiantdetailsComponent;
  let fixture: ComponentFixture<EtudiantdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtudiantdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
