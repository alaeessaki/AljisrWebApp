import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotDePresidentComponent } from './mot-de-president.component';

describe('MotDePresidentComponent', () => {
  let component: MotDePresidentComponent;
  let fixture: ComponentFixture<MotDePresidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotDePresidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotDePresidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
