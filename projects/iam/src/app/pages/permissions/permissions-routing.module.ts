import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PermissionsActionComponent } from './permissions-action/permissions-action.component';
import { PermissionsListComponent } from './permissions-list/permissions-list.component';

const permRoutes: Routes = [
  {
    path: 'permissions/new',
    component: PermissionsActionComponent
  },
  {
    path: 'permissions/modify/:id',
    component: PermissionsActionComponent
  },
  {
    path: 'permissions',
    component: PermissionsListComponent
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
