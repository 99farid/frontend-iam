import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersActionComponent } from './users-action/users-action.component';
import { UsersListComponent } from './users-list/users-list.component';
import { PermissionGuardGuard } from 'projects/core/src/app/services/permission-guard/permission-guard.guard';

const userRoutes: Routes = [
  {
    path: 'new',
    component: UsersActionComponent,
    canActivate : [PermissionGuardGuard]
  },
  {
    path: 'modify/:id',
    component: UsersActionComponent,
    canActivate : [PermissionGuardGuard]
  },
  {
    path: '',
    component: UsersListComponent,
    canActivate : [PermissionGuardGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }
