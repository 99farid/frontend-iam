import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RolesActionComponent } from './roles-action/roles-action.component';
import { RolesListComponent } from './roles-list/roles-list.component';
import { PermissionGuardGuard } from 'projects/core/src/app/services/permission-guard/permission-guard.guard';

const rolesRoutes : Routes = [
  {
    path: 'new',
    component: RolesActionComponent,
    canActivate : [PermissionGuardGuard]
  },
  {
    path: 'modify/:id',
    component: RolesActionComponent,
    canActivate : [PermissionGuardGuard]

  },
  {
    path: '',
    component : RolesListComponent,
    canActivate : [PermissionGuardGuard]
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
