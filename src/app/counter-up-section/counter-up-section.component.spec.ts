import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterUpSectionComponent } from './counter-up-section.component';

describe('CounterUpSectionComponent', () => {
  let component: CounterUpSectionComponent;
  let fixture: ComponentFixture<CounterUpSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterUpSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterUpSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
