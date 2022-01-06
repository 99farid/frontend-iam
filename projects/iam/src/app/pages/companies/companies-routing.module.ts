import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesActionComponent } from './companies-action/companies-action.component';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { PermissionGuardGuard } from 'projects/core/src/app/services/permission-guard/permission-guard.guard';

const compRoutes: Routes = [
  {
    path: 'companies/new',
    component: CompaniesActionComponent,
    canActivate : [PermissionGuardGuard]
  },
  {
    path: 'companies/modify/:id',
    component: CompaniesActionComponent,
    canActivate : [PermissionGuardGuard]
  },
  {
    path: 'companies',
    component: CompaniesListComponent,
    canActivate : [PermissionGuardGuard]
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
