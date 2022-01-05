import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicesActionComponent } from './invoices-action/invoices-action.component';
import { InvoicesListComponent } from './invoices-list/invoices-list.component';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { InvoicesRoutingModule } from './invoices-routing.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { NgSelect2Module } from 'ng-select2';
import { ConfirmDialogModule } from 'primeng/confirmdialog';



@NgModule({
  declarations: [
    InvoicesActionComponent,
    InvoicesListComponent
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    NavbarModule,
    RouterModule,
    FormsModule,
    TableModule,
    ButtonModule,
    NgSelect2Module,
    ConfirmDialogModule
  ]
})
export class InvoicesModule { }
