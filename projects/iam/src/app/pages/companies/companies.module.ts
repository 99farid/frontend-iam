import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from '../companies.component';
import { CompaniesActionComponent } from './companies-action/companies-action.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';



@NgModule({
  declarations: [
    CompaniesComponent,
    CompaniesActionComponent,
    CompaniesListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CompaniesModule { }
