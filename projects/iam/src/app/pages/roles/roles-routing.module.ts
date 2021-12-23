import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RolesActionComponent } from './roles-action/roles-action.component';
import { RolesListComponent } from './roles-list/roles-list.component';

const rolesRoutes : Routes = [
  {
    path: 'roles-action/new',
    component: RolesActionComponent
  },
  {
    path: 'roles-action/:id',
    component: RolesActionComponent
  },
  {
    path: 'roles-list',
    component : RolesListComponent
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
