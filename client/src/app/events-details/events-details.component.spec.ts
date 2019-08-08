import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsDetailsComponent } from './events-details.component';

describe('EventsDetailsComponent', () => {
  let component: EventsDetailsComponent;
  let fixture: ComponentFixture<EventsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
