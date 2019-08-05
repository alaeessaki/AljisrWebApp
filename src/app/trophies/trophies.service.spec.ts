import { TestBed } from '@angular/core/testing';

import { TrophiesService } from './trophies.service';

describe('TrophiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrophiesService = TestBed.get(TrophiesService);
    expect(service).toBeTruthy();
  });
});
