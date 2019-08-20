import { TestBed } from '@angular/core/testing';

import { QueSoutenenonsNousCardsService } from './que-soutenenons-nous-cards.service';

describe('QueSoutenenonsNousCardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QueSoutenenonsNousCardsService = TestBed.get(QueSoutenenonsNousCardsService);
    expect(service).toBeTruthy();
  });
});
