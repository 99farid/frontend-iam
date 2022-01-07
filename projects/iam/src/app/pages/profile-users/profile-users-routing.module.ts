import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileUsersActionComponent } from './profile-users-action/profile-users-action.component';
import { ProfileUsersViewComponent } from './profile-users-view/profile-users-view.component';
import { PermissionGuardGuard } from 'projects/core/src/app/services/permission-guard/permission-guard.guard';
import { AuthGuard } from 'projects/core/src/app/services/authguard/auth.guard';

const profileRoutes : Routes = [
  {
    path: 'new',
    component: ProfileUsersActionComponent,
    canActivate : [AuthGuard, PermissionGuardGuard]
  },
  {
    path: 'modify/:id',
    component: ProfileUsersActionComponent,
    canActivate : [AuthGuard, PermissionGuardGuard]
  },
  {
    path: '',
    component : ProfileUsersViewComponent,
    canActivate : [AuthGuard, PermissionGuardGuard]
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
