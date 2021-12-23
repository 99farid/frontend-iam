import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsInActionComponent } from './transactions-in-action/transactions-in-action.component';
import { TransactionsInListComponent } from './transactions-in-list/transactions-in-list.component';
import { TransactionsInRoutingModule } from './transactions-in-routing.module';
import { TransactionsInViewComponent } from './transactions-in-view/transactions-in-view.component';

import { RouterModule } from '@angular/router';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    TransactionsInActionComponent,
    TransactionsInListComponent,
    TransactionsInViewComponent
  ],
  imports: [
    CommonModule,
    TransactionsInRoutingModule,
    RouterModule,
    NavbarModule,
    FormsModule,
    TableModule,
    ButtonModule
    
  ]
})
export class TransactionsInModule { }
