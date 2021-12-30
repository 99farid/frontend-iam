import { TestBed } from '@angular/core/testing';

import { DetailTransactionsOutService } from './detail-transactions-out.service';

describe('DetailTransactionsOutService', () => {
  let service: DetailTransactionsOutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailTransactionsOutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
