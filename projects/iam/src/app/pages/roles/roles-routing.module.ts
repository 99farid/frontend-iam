import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RolesActionComponent } from './roles-action/roles-action.component';
import { RolesListComponent } from './roles-list/roles-list.component';
import { PermissionGuardGuard } from 'projects/core/src/app/services/permission-guard/permission-guard.guard';
import { AuthGuard } from 'projects/core/src/app/services/authguard/auth.guard';

const rolesRoutes : Routes = [
  {
    path: 'new',
    component: RolesActionComponent,
    canActivate : [AuthGuard, PermissionGuardGuard]
  },
  {
    path: 'modify/:id',
    component: RolesActionComponent,
    canActivate : [AuthGuard, PermissionGuardGuard]

  },
  {
    path: '',
    component : RolesListComponent,
    canActivate : [AuthGuard, PermissionGuardGuard]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(rolesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RolesRoutingModule { }
