import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrophieDetailsComponent } from './trophie-details.component';

describe('TrophieDetailsComponent', () => {
  let component: TrophieDetailsComponent;
  let fixture: ComponentFixture<TrophieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrophieDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrophieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
