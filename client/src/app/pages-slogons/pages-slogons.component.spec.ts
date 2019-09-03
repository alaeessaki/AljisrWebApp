import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSlogonsComponent } from './pages-slogons.component';

describe('PagesSlogonsComponent', () => {
  let component: PagesSlogonsComponent;
  let fixture: ComponentFixture<PagesSlogonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesSlogonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesSlogonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
