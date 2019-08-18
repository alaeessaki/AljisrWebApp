import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DernieresNouvComponent } from './dernieres-nouv.component';

describe('DernieresNouvComponent', () => {
  let component: DernieresNouvComponent;
  let fixture: ComponentFixture<DernieresNouvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DernieresNouvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DernieresNouvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
