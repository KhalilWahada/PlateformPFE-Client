import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheencoursComponent } from './ficheencours.component';

describe('FicheencoursComponent', () => {
  let component: FicheencoursComponent;
  let fixture: ComponentFixture<FicheencoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheencoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheencoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
