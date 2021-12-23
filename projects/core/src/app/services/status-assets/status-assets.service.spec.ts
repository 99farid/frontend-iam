import { TestBed } from '@angular/core/testing';

import { StatusAssetsService } from './status-assets.service';

describe('StatusAssetsService', () => {
  let service: StatusAssetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusAssetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
