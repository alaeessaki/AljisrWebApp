import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterSectionComponent } from './newsletter-section.component';

describe('NewsletterSectionComponent', () => {
  let component: NewsletterSectionComponent;
  let fixture: ComponentFixture<NewsletterSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
