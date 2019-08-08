import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriStepperComponent } from './inscri-stepper.component';

describe('InscriStepperComponent', () => {
  let component: InscriStepperComponent;
  let fixture: ComponentFixture<InscriStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
