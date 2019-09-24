import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenchipComponent } from './greenchip.component';

describe('GreenchipComponent', () => {
  let component: GreenchipComponent;
  let fixture: ComponentFixture<GreenchipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenchipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenchipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
