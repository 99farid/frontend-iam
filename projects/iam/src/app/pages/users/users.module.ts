import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersActionComponent } from './users-action/users-action.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { NgSelect2Module } from 'ng-select2';


@NgModule({
  declarations: [
    UsersActionComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NavbarModule,
    RouterModule,
    FormsModule,
    TableModule,
    ButtonModule
  ]
})
export class UsersModule { }
