import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';
import { InvoicesActionComponent } from './invoices-action/invoices-action.component';
import { PermissionGuardGuard } from 'projects/core/src/app/services/permission-guard/permission-guard.guard';

const routes : Routes = [
  {
    path : 'new',
    component : InvoicesActionComponent,
    canActivate : [PermissionGuardGuard]
  },
  {
    path : 'modify/:id',
    component : InvoicesActionComponent,
    canActivate : [PermissionGuardGuard]
  },
  {
    path : '',
    component : InvoicesListComponent,
    canActivate : [PermissionGuardGuard]
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
