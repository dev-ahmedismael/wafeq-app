import { TestBed } from '@angular/core/testing';

import { QuotesAndProformasService } from './quotes-and-proformas.service';

describe('QuotesAndProformasService', () => {
  let service: QuotesAndProformasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuotesAndProformasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
