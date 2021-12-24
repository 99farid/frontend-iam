import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileUsersActionComponent } from './profile-users-action/profile-users-action.component';
import { ProfileUsersListComponent } from './profile-users-list/profile-users-list.component';
import { ProfileUsersViewComponent } from './profile-users-view/profile-users-view.component';

const profileRoutes : Routes = [
  {
    path: 'profile-users-action/new',
    component: ProfileUsersActionComponent
  },
  {
    path: 'profile-users-action/:id',
    component: ProfileUsersActionComponent
  },
  {
    path: 'profile-users-list',
    component : ProfileUsersListComponent
  },
  {
    path: 'profile-users-view',
    component : ProfileUsersViewComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(profileRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProfileUsersRoutingModule { }
