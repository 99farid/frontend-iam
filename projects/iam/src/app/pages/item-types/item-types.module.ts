import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemTypesActionComponent } from './item-types-action/item-types-action.component';
import { ItemTypesListComponent } from './item-types-list/item-types-list.component';
import { ItemTypesRoutingModule } from './item-types-routing.module';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { NgSelect2Module } from 'ng-select2';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [
    ItemTypesActionComponent,
    ItemTypesListComponent
  ],
  imports: [
    CommonModule,
    ItemTypesRoutingModule,
    NavbarModule,
    RouterModule,
    FormsModule,
    TableModule,
    ButtonModule,
    NgSelect2Module,
    ConfirmDialogModule,
    InputTextModule
  ]
})
export class ItemTypesModule { }
