import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessioncurrentComponent } from './sessioncurrent.component';

describe('SessioncurrentComponent', () => {
  let component: SessioncurrentComponent;
  let fixture: ComponentFixture<SessioncurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessioncurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessioncurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
