import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsOutActionComponent } from './transactions-out-action/transactions-out-action.component';
import { TransactionsOutListComponent } from './transactions-out-list/transactions-out-list.component';
import { TransactionsOutViewComponent } from './transactions-out-view/transactions-out-view.component';
import { PermissionGuardGuard } from 'projects/core/src/app/services/permission-guard/permission-guard.guard';
import { TransactionsExpiredComponent } from './transactions-expired/transactions-expired.component';

const transOutRoutes : Routes = [
  {
    path: 'new',
    component: TransactionsOutActionComponent,
    canActivate : [PermissionGuardGuard]
  },
  {
    path: 'detail/:idHeader',
    component : TransactionsOutViewComponent,
    canActivate : [PermissionGuardGuard]
  },
  {
    path: '',
    component : TransactionsOutListComponent,
    canActivate : [PermissionGuardGuard]
  },
  {
    path: 'expired',
    component : TransactionsExpiredComponent,
    canActivate : [PermissionGuardGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(transOutRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TransactionsOutRoutingModule { }
