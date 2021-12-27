import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolePermissionsRoutingModule } from './role-permissions-routing.module';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RolePermissionsComponent } from './role-permissions.component';



@NgModule({
  declarations: [
    RolePermissionsComponent
  ],
  imports: [
    CommonModule,
    RolePermissionsRoutingModule,
    NavbarModule,
    RouterModule,
    TableModule,
    FormsModule,
    ButtonModule
  ]
})
export class RolePermissionsModule { }
