import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';
import { InvoicesActionComponent } from './invoices-action/invoices-action.component';
import { PermissionGuardGuard } from 'projects/core/src/app/services/permission-guard/permission-guard.guard';
import { AuthGuard } from 'projects/core/src/app/services/authguard/auth.guard';

const routes : Routes = [
  {
    path : 'new',
    component : InvoicesActionComponent,
    canActivate : [AuthGuard, PermissionGuardGuard]
  },
  {
    path : 'modify/:id',
    component : InvoicesActionComponent,
    canActivate : [AuthGuard, PermissionGuardGuard]
  },
  {
    path : '',
    component : InvoicesListComponent,
    canActivate : [AuthGuard, PermissionGuardGuard]
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class InvoicesRoutingModule { }
