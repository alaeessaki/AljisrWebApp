import { TestBed } from '@angular/core/testing';

import { BenevolerService } from './benevoler.service';

describe('BenevolerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BenevolerService = TestBed.get(BenevolerService);
    expect(service).toBeTruthy();
  });
});
