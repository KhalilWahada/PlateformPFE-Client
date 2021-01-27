import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesoutenanceComponent } from './createsoutenance.component';

describe('CreatesoutenanceComponent', () => {
  let component: CreatesoutenanceComponent;
  let fixture: ComponentFixture<CreatesoutenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesoutenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesoutenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
