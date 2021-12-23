import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesActionComponent } from './employees-action/employees-action.component';



@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeesListComponent,
    EmployeesActionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployeesModule { }
