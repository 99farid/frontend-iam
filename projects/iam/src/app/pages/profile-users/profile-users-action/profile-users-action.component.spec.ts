import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUsersActionComponent } from './profile-users-action.component';

describe('ProfileUsersActionComponent', () => {
  let component: ProfileUsersActionComponent;
  let fixture: ComponentFixture<ProfileUsersActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileUsersActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUsersActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
