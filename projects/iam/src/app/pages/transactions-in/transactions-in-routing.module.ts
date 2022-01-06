import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsInActionComponent } from './transactions-in-action/transactions-in-action.component';
import { TransactionsInListComponent } from './transactions-in-list/transactions-in-list.component';
import { TransactionsInViewComponent } from './transactions-in-view/transactions-in-view.component';
import { TransactionsInDetailActionComponent } from './transactions-in-detail-action/transactions-in-detail-action.component';
import { PermissionGuardGuard } from 'projects/core/src/app/services/permission-guard/permission-guard.guard';

const transInRoutes : Routes = [
  {
    path: 'transactions-in/new',
    component: TransactionsInActionComponent,
    canActivate : [PermissionGuardGuard]
  },
  {
    path: 'transactions-in/detail/:id',
    component : TransactionsInViewComponent,
    canActivate : [PermissionGuardGuard]
  },
  {
    path: 'transactions-in/new/detail/:id',
    component : TransactionsInDetailActionComponent,
    canActivate : [PermissionGuardGuard]
  },
  {
    path: 'transactions-in',
    component : TransactionsInListComponent,
    canActivate : [PermissionGuardGuard]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(transInRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TransactionsInRoutingModule { }
