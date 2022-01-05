import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileUsersActionComponent } from './profile-users-action/profile-users-action.component';
import { ProfileUsersViewComponent } from './profile-users-view/profile-users-view.component';

const profileRoutes : Routes = [
  {
    path: 'profile-users/new',
    component: ProfileUsersActionComponent
  },
  {
    path: 'profile-users/modify/:id',
    component: ProfileUsersActionComponent
  },
  {
    path: 'profile-users',
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
