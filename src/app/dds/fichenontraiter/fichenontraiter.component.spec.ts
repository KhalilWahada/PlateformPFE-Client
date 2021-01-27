import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichenontraiterComponent } from './fichenontraiter.component';

describe('FichenontraiterComponent', () => {
  let component: FichenontraiterComponent;
  let fixture: ComponentFixture<FichenontraiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichenontraiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichenontraiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
