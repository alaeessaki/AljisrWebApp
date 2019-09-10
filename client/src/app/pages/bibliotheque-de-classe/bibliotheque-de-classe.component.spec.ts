import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliothequeDeClasseComponent } from './bibliotheque-de-classe.component';

describe('BibliothequeDeClasseComponent', () => {
  let component: BibliothequeDeClasseComponent;
  let fixture: ComponentFixture<BibliothequeDeClasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibliothequeDeClasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliothequeDeClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
