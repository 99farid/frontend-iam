import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PermissionsActionComponent } from './permissions-action/permissions-action.component';
import { PermissionsListComponent } from './permissions-list/permissions-list.component';
import { PermissionGuardGuard } from 'projects/core/src/app/services/permission-guard/permission-guard.guard';

const permRoutes: Routes = [
  {
    path: 'new',
    component: PermissionsActionComponent,
    canActivate : [PermissionGuardGuard]
  },
  {
    path: 'modify/:id',
    component: PermissionsActionComponent,
    canActivate : [PermissionGuardGuard]
  },
  {
    path: '',
    component: PermissionsListComponent,
    canActivate : [PermissionGuardGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(permRoutes)
  ], 
  exports: [
    RouterModule
  ]
})
export class PermissionsRoutingModule { }
