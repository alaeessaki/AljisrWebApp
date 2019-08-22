import { TestBed } from '@angular/core/testing';

import { NewsLetterService } from './news-letter.service';

describe('NewsLetterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsLetterService = TestBed.get(NewsLetterService);
    expect(service).toBeTruthy();
  });
});
