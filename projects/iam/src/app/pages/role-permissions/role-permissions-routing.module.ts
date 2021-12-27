import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RolePermissionsComponent } from './role-permissions.component';

const rpRoutes : Routes = [
  {
    path: 'role-permissions',
    component: RolePermissionsComponent
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
