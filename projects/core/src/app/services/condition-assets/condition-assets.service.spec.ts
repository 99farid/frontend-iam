import { TestBed } from '@angular/core/testing';

import { ConditionAssetsService } from './condition-assets.service';

describe('ConditionAssetsService', () => {
  let service: ConditionAssetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConditionAssetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
