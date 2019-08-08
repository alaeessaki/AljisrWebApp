import { TestBed } from '@angular/core/testing';

import { AljisrNumsService } from './aljisr-nums.service';

describe('AljisrNumsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AljisrNumsService = TestBed.get(AljisrNumsService);
    expect(service).toBeTruthy();
  });
});
