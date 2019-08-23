import { TestBed } from '@angular/core/testing';

import { TemoinsService } from './temoins.service';

describe('TemoinsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TemoinsService = TestBed.get(TemoinsService);
    expect(service).toBeTruthy();
  });
});
