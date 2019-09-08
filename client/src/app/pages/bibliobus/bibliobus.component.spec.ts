import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliobusComponent } from './bibliobus.component';

describe('BibliobusComponent', () => {
  let component: BibliobusComponent;
  let fixture: ComponentFixture<BibliobusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibliobusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliobusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
