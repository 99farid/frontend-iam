import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionsActionComponent } from './permissions-action/permissions-action.component';
import { PermissionsListComponent } from './permissions-list/permissions-list.component';
import { PermissionsRoutingModule } from './permissions-routing.module';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';



@NgModule({
  declarations: [
    PermissionsActionComponent,
    PermissionsListComponent
  ],
  imports: [
    CommonModule,
    PermissionsRoutingModule,
    NavbarModule,
    RouterModule,
    FormsModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule

  ]
})
export class PermissionsModule { }
