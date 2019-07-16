import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrophiesComponent } from './trophies.component';

describe('TrophiesComponent', () => {
  let component: TrophiesComponent;
  let fixture: ComponentFixture<TrophiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrophiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrophiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
