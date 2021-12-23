import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesListComponent } from './roles-list/roles-list.component';
import { RolesActionComponent } from './roles-action/roles-action.component';
import { RolesRoutingModule } from './roles-routing.module';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    RolesListComponent,
    RolesActionComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    NavbarModule,
    RouterModule,
    FormsModule,
    TableModule,
    ButtonModule
  ]
})
export class RolesModule { }
