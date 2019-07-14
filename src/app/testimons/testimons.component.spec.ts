import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonsComponent } from './testimons.component';

describe('TestimonsComponent', () => {
  let component: TestimonsComponent;
  let fixture: ComponentFixture<TestimonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
