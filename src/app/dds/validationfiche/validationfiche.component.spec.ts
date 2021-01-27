import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationficheComponent } from './validationfiche.component';

describe('ValidationficheComponent', () => {
  let component: ValidationficheComponent;
  let fixture: ComponentFixture<ValidationficheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationficheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
