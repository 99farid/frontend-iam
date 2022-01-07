import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesActionComponent } from './companies-action/companies-action.component';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { PermissionGuardGuard } from 'projects/core/src/app/services/permission-guard/permission-guard.guard';
import { AuthGuard } from 'projects/core/src/app/services/authguard/auth.guard';

const compRoutes: Routes = [
  {
    path: 'new',
    component: CompaniesActionComponent,
    canActivate : [AuthGuard, PermissionGuardGuard]
  },
  {
    path: 'modify/:id',
    component: CompaniesActionComponent,
    canActivate : [AuthGuard, PermissionGuardGuard]
  },
  {
    path: '',
    component: CompaniesListComponent,
    canActivate : [AuthGuard, PermissionGuardGuard]
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
