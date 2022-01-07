import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesActionComponent } from './companies-action/companies-action.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompaniesRoutingModule } from './companies-routing.module';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [
    CompaniesActionComponent,
    CompaniesListComponent
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    NavbarModule,
    RouterModule,
    FormsModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    InputTextModule
  ]
})
export class CompaniesModule { }
