import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCardComponent } from './check-card.component';

describe('CheckCardComponent', () => {
  let component: CheckCardComponent;
  let fixture: ComponentFixture<CheckCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
