import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemsActionComponent } from './items-action/items-action.component';
import { ItemsRoutingModule } from './items-routing.module';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { NgSelect2Module } from 'ng-select2';



@NgModule({
  declarations: [
    ItemsListComponent,
    ItemsActionComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    NavbarModule,
    RouterModule,
    FormsModule,
    TableModule,
    ButtonModule,
    NgSelect2Module
  ]
})
export class ItemsModule { }
