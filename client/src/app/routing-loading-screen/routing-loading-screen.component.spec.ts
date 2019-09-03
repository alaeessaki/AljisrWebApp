import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingLoadingScreenComponent } from './routing-loading-screen.component';

describe('RoutingLoadingScreenComponent', () => {
  let component: RoutingLoadingScreenComponent;
  let fixture: ComponentFixture<RoutingLoadingScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingLoadingScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingLoadingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
