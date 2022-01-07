import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesActionComponent } from './employees-action/employees-action.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { NgSelect2Module } from 'ng-select2';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    EmployeesListComponent,
    EmployeesActionComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    NavbarModule,
    RouterModule,
    FormsModule,
    TableModule,
    ButtonModule,
    NgSelect2Module,
    ConfirmDialogModule,
    InputTextModule
  ]
})
export class EmployeesModule { }
