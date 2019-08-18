import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrophiesPicsComponent } from './trophies-pics.component';

describe('TrophiesPicsComponent', () => {
  let component: TrophiesPicsComponent;
  let fixture: ComponentFixture<TrophiesPicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrophiesPicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrophiesPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
