import { TestBed } from '@angular/core/testing';

import { DetailTransactionsInService } from './detail-transactions-in.service';

describe('DetailTransactionsOutService', () => {
  let service: DetailTransactionsInService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailTransactionsInService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
