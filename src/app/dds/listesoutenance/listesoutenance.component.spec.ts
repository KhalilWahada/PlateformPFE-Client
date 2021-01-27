import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesoutenanceComponent } from './listesoutenance.component';

describe('ListesoutenanceComponent', () => {
  let component: ListesoutenanceComponent;
  let fixture: ComponentFixture<ListesoutenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListesoutenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesoutenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
