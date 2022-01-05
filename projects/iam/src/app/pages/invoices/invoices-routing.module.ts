import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';
import { InvoicesActionComponent } from './invoices-action/invoices-action.component';

const routes : Routes = [
  {
    path : 'invoices/new',
    component : InvoicesActionComponent
  },
  {
    path : 'invoices/modify/:id',
    component : InvoicesActionComponent
  },
  {
    path : 'invoices',
    component : InvoicesListComponent
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
