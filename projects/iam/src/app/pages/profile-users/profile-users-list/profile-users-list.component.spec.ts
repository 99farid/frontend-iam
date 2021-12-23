import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUsersListComponent } from './profile-users-list.component';

describe('ProfileUsersListComponent', () => {
  let component: ProfileUsersListComponent;
  let fixture: ComponentFixture<ProfileUsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileUsersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
