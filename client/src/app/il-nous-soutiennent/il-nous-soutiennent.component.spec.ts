import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlNousSoutiennentComponent } from './il-nous-soutiennent.component';

describe('IlNousSoutiennentComponent', () => {
  let component: IlNousSoutiennentComponent;
  let fixture: ComponentFixture<IlNousSoutiennentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlNousSoutiennentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlNousSoutiennentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
