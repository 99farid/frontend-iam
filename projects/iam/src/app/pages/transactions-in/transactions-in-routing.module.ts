import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsInActionComponent } from './transactions-in-action/transactions-in-action.component';
import { TransactionsInListComponent } from './transactions-in-list/transactions-in-list.component';
import { TransactionsInViewComponent } from './transactions-in-view/transactions-in-view.component';

const transInRoutes : Routes = [
  {
    path: 'transactions-in-action/new',
    component: TransactionsInActionComponent
  },
  {
    path: 'transactions-in-action/:id',
    component: TransactionsInActionComponent
  },
  {
    path: 'transactions-in-list',
    component : TransactionsInListComponent
  },
  {
    path: 'transactions-in-view',
    component : TransactionsInViewComponent
  }
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
