import { TestBed } from '@angular/core/testing';

import { ContactMailService } from './contact-mail.service';

describe('ContactMailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactMailService = TestBed.get(ContactMailService);
    expect(service).toBeTruthy();
  });
});
