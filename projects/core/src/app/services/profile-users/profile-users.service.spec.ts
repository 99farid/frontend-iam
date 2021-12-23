import { TestBed } from '@angular/core/testing';

import { ProfileUsersService } from './profile-users.service';

describe('ProfileUsersService', () => {
  let service: ProfileUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
