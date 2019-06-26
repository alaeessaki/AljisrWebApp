import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiSomeNousComponent } from './qui-some-nous.component';

describe('QuiSomeNousComponent', () => {
  let component: QuiSomeNousComponent;
  let fixture: ComponentFixture<QuiSomeNousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuiSomeNousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiSomeNousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
