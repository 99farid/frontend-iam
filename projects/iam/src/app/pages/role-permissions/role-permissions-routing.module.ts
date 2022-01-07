import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RolePermissionsComponent } from './role-permissions.component';
import { PermissionGuardGuard } from 'projects/core/src/app/services/permission-guard/permission-guard.guard';
import { AuthGuard } from 'projects/core/src/app/services/authguard/auth.guard';

const rpRoutes : Routes = [
  {
    path: 'detail/:id',
    component: RolePermissionsComponent,
    canActivate : [AuthGuard, PermissionGuardGuard]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(rpRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RolePermissionsRoutingModule { }
