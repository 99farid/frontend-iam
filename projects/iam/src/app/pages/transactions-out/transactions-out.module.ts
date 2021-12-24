import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsOutListComponent } from './transactions-out-list/transactions-out-list.component';
import { TransactionsOutActionComponent } from './transactions-out-action/transactions-out-action.component';
import { TransactionsOutViewComponent } from './transactions-out-view/transactions-out-view.component';
import { TransactionsOutRoutingModule } from './transactions-out-routing.module';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    TransactionsOutListComponent,
    TransactionsOutActionComponent,
    TransactionsOutViewComponent
  ],
  imports: [
    CommonModule,
    TransactionsOutRoutingModule,
    RouterModule,
    NavbarModule,
    FormsModule,
    TableModule,
    ButtonModule
  ]
})
export class TransactionsOutModule { }
