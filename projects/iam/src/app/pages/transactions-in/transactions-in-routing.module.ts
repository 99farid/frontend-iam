import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsInActionComponent } from './transactions-in-action/transactions-in-action.component';
import { TransactionsInListComponent } from './transactions-in-list/transactions-in-list.component';
import { TransactionsInViewComponent } from './transactions-in-view/transactions-in-view.component';
import { TransactionsInDetailActionComponent } from './transactions-in-detail-action/transactions-in-detail-action.component';
import { PermissionGuardGuard } from 'projects/core/src/app/services/permission-guard/permission-guard.guard';
import { AuthGuard } from 'projects/core/src/app/services/authguard/auth.guard';

const transInRoutes : Routes = [
  {
    path: 'new',
    component: TransactionsInActionComponent,
    canActivate : [AuthGuard, PermissionGuardGuard]
  },
  {
    path: 'detail/:id',
    component : TransactionsInViewComponent,
    canActivate : [AuthGuard, PermissionGuardGuard]
  },
  {
    path: 'new/detail/:id',
    component : TransactionsInDetailActionComponent,
    canActivate : [AuthGuard, PermissionGuardGuard]
  },
  {
    path: '',
    component : TransactionsInListComponent,
    canActivate : [AuthGuard, PermissionGuardGuard]
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
