import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AljisrPlatformsComponent } from './aljisr-platforms.component';

describe('AljisrPlatformsComponent', () => {
  let component: AljisrPlatformsComponent;
  let fixture: ComponentFixture<AljisrPlatformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AljisrPlatformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AljisrPlatformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
