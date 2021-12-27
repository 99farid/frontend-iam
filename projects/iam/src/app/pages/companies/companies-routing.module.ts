import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesActionComponent } from './companies-action/companies-action.component';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesListComponent } from './companies-list/companies-list.component';

const compRoutes: Routes = [
  {
    path: 'companies-action/new',
    component: CompaniesActionComponent
  },
  {
    path: 'companies-action/:id',
    component: CompaniesActionComponent
  },
  {
    path: 'companies-list',
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
