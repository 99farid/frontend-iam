import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesActionComponent } from './employees-action/employees-action.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { RouterModule, Routes } from '@angular/router';


const empRoutes: Routes = [
  {
    path: 'employees/new',
    component: EmployeesActionComponent
  },
  {
    path: 'employees/modify/:id',
    component: EmployeesActionComponent
  },
  {
    path: 'employees',
    component: EmployeesListComponent
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
