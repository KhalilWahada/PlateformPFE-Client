import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichedetailsComponent } from './fichedetails.component';

describe('FichedetailsComponent', () => {
  let component: FichedetailsComponent;
  let fixture: ComponentFixture<FichedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
