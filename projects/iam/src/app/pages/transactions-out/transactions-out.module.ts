import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsOutListComponent } from './transactions-out-list/transactions-out-list.component';
import { TransactionsOutActionComponent } from './transactions-out-action/transactions-out-action.component';
import { TransactionsOutViewComponent } from './transactions-out-view/transactions-out-view.component';



@NgModule({
  declarations: [
    TransactionsOutListComponent,
    TransactionsOutActionComponent,
    TransactionsOutViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransactionsOutModule { }
