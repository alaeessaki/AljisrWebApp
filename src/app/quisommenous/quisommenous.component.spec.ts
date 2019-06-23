import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuisommenousComponent } from './quisommenous.component';

describe('QuisommenousComponent', () => {
  let component: QuisommenousComponent;
  let fixture: ComponentFixture<QuisommenousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuisommenousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuisommenousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
