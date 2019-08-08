import { TestBed } from '@angular/core/testing';

import { HeroImgsService } from './hero-imgs.service';

describe('HeroImgsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroImgsService = TestBed.get(HeroImgsService);
    expect(service).toBeTruthy();
  });
});
