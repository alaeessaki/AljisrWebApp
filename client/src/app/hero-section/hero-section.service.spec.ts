import { TestBed } from '@angular/core/testing';

import { HeroSectionService } from './hero-section.service';

describe('HeroSectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroSectionService = TestBed.get(HeroSectionService);
    expect(service).toBeTruthy();
  });
});
