import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListconventionComponent } from './listconvention.component';

describe('ListconventionComponent', () => {
  let component: ListconventionComponent;
  let fixture: ComponentFixture<ListconventionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListconventionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListconventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
