import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlgCarouselComponent } from './slg-carousel.component';

describe('SlgCarouselComponent', () => {
  let component: SlgCarouselComponent;
  let fixture: ComponentFixture<SlgCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlgCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlgCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
