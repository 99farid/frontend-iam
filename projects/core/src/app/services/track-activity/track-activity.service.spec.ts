import { TestBed } from '@angular/core/testing';

import { TrackActivityService } from './track-activity.service';

describe('TrackActivityService', () => {
  let service: TrackActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
