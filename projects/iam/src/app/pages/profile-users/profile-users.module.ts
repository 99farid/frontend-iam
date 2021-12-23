import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileUsersComponent } from './profile-users.component';
import { ProfileUsersListComponent } from './profile-users-list/profile-users-list.component';
import { ProfileUsersActionComponent } from './profile-users-action/profile-users-action.component';



@NgModule({
  declarations: [
    ProfileUsersComponent,
    ProfileUsersListComponent,
    ProfileUsersActionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileUsersModule { }
