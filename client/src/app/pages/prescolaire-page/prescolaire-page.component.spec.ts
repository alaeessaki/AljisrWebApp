import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescolairePageComponent } from './prescolaire-page.component';

describe('PrescolairePageComponent', () => {
  let component: PrescolairePageComponent;
  let fixture: ComponentFixture<PrescolairePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescolairePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescolairePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
