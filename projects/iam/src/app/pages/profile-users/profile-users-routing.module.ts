import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileUsersActionComponent } from './profile-users-action/profile-users-action.component';
import { ProfileUsersViewComponent } from './profile-users-view/profile-users-view.component';
import { PermissionGuardGuard } from 'projects/core/src/app/services/permission-guard/permission-guard.guard';

const profileRoutes : Routes = [
  {
    path: 'new',
    component: ProfileUsersActionComponent,
    canActivate : [PermissionGuardGuard]
  },
  {
    path: 'modify/:id',
    component: ProfileUsersActionComponent,
    canActivate : [PermissionGuardGuard]
  },
  {
    path: '',
    component : ProfileUsersViewComponent,
    canActivate : [PermissionGuardGuard]
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
