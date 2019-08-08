import { TestBed } from '@angular/core/testing';

import { TeamAljisrService } from './team-aljisr.service';

describe('TeamAljisrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamAljisrService = TestBed.get(TeamAljisrService);
    expect(service).toBeTruthy();
  });
});
