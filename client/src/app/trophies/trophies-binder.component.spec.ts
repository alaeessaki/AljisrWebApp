import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrophiesBinderComponent } from './trophies-binder.component';

describe('TrophiesBinderComponent', () => {
  let component: TrophiesBinderComponent;
  let fixture: ComponentFixture<TrophiesBinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrophiesBinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrophiesBinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
