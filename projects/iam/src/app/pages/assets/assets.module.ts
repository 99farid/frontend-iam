import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsListComponent } from './assets-list/assets-list.component';
import { AssetsActionComponent } from './assets-action/assets-action.component';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AssetsRoutingModule } from './assets-routing.module';
import { NgSelect2Module } from 'ng-select2';



@NgModule({
  declarations: [
    AssetsListComponent,
    AssetsActionComponent
  ],
  imports: [
    CommonModule,
    AssetsRoutingModule,
    NavbarModule,
    RouterModule,
    FormsModule,
    TableModule,
    ButtonModule,
    NgSelect2Module
  ]
})
export class AssetsModule { }
