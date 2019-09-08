import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnToActComponent } from './learn-to-act.component';

describe('LearnToActComponent', () => {
  let component: LearnToActComponent;
  let fixture: ComponentFixture<LearnToActComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnToActComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnToActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
