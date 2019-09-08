import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoleEducationComponent } from './pole-education.component';

describe('PoleEducationComponent', () => {
  let component: PoleEducationComponent;
  let fixture: ComponentFixture<PoleEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoleEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoleEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
