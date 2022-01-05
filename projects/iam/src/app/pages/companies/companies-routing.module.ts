import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesActionComponent } from './companies-action/companies-action.component';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesListComponent } from './companies-list/companies-list.component';

const compRoutes: Routes = [
  {
    path: 'companies/new',
    component: CompaniesActionComponent
  },
  {
    path: 'companies/modify/:id',
    component: CompaniesActionComponent
  },
  {
    path: 'companies',
    component: CompaniesListComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(compRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class CompaniesRoutingModule { }
