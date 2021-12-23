import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesComponent } from './invoices.component';
import { InvoicesActionComponent } from './invoices-action/invoices-action.component';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';



@NgModule({
  declarations: [
    InvoicesComponent,
    InvoicesActionComponent,
    InvoicesListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InvoicesModule { }
