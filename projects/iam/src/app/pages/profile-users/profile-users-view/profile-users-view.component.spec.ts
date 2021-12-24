import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUsersViewComponent } from './profile-users-view.component';

describe('ProfileUsersViewComponent', () => {
  let component: ProfileUsersViewComponent;
  let fixture: ComponentFixture<ProfileUsersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileUsersViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUsersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
