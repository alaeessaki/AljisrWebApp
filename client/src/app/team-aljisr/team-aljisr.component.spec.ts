import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAljisrComponent } from './team-aljisr.component';

describe('TeamAljisrComponent', () => {
  let component: TeamAljisrComponent;
  let fixture: ComponentFixture<TeamAljisrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamAljisrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamAljisrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
