import { TestBed } from '@angular/core/testing';

import { CarouselImgService } from './carousel-img.service';

describe('CarouselImgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarouselImgService = TestBed.get(CarouselImgService);
    expect(service).toBeTruthy();
  });
});
