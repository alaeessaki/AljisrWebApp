import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneesSolidairesComponent } from './journees-solidaires.component';

describe('JourneesSolidairesComponent', () => {
  let component: JourneesSolidairesComponent;
  let fixture: ComponentFixture<JourneesSolidairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourneesSolidairesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourneesSolidairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
