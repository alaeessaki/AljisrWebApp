import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueSoutenonsNousComponent } from './que-soutenons-nous.component';

describe('QueSoutenonsNousComponent', () => {
  let component: QueSoutenonsNousComponent;
  let fixture: ComponentFixture<QueSoutenonsNousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueSoutenonsNousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueSoutenonsNousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
