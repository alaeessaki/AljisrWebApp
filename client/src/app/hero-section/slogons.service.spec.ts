import { TestBed } from '@angular/core/testing';

import { SlogonsService } from './slogons.service';

describe('SlogonsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlogonsService = TestBed.get(SlogonsService);
    expect(service).toBeTruthy();
  });
});
