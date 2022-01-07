import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusAssetsListComponent } from './status-assets-list/status-assets-list.component';
import { StatusAssetsActionComponent } from './status-assets-action/status-assets-action.component';
import { StatusAssetsRoutingModule } from './status-assets-routing.module';
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
    StatusAssetsListComponent,
    StatusAssetsActionComponent
  ],
  imports: [
    CommonModule,
    StatusAssetsRoutingModule,
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
export class StatusAssetsModule { }
