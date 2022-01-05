import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsOutActionComponent } from './transactions-out-action/transactions-out-action.component';
import { TransactionsOutListComponent } from './transactions-out-list/transactions-out-list.component';
import { TransactionsOutViewComponent } from './transactions-out-view/transactions-out-view.component';

const transOutRoutes : Routes = [
  {
    path: 'transactions-out/new',
    component: TransactionsOutActionComponent
  },
  {
    path: 'transactions-out/detail/:idHeader',
    component : TransactionsOutViewComponent
  },
  {
    path: 'transactions-out',
    component : TransactionsOutListComponent
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
