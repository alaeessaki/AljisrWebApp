import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenevolerComponent } from './benevoler.component';

describe('BenevolerComponent', () => {
  let component: BenevolerComponent;
  let fixture: ComponentFixture<BenevolerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenevolerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenevolerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
