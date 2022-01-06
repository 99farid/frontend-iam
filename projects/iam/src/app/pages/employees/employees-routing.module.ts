import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesActionComponent } from './employees-action/employees-action.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { RouterModule, Routes } from '@angular/router';
import { PermissionGuardGuard } from 'projects/core/src/app/services/permission-guard/permission-guard.guard';


const empRoutes: Routes = [
  {
    path: 'new',
    component: EmployeesActionComponent,
    canActivate : [PermissionGuardGuard]
  },
  {
    path: 'modify/:id',
    component: EmployeesActionComponent,
    canActivate : [PermissionGuardGuard]
  },
  {
    path: '',
    component: EmployeesListComponent,
    canActivate : [PermissionGuardGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(empRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EmployeesRoutingModule { }
