import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionsActionComponent } from './permissions-action/permissions-action.component';
import { PermissionsListComponent } from './permissions-list/permissions-list.component';



@NgModule({
  declarations: [
    PermissionsActionComponent,
    PermissionsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PermissionsModule { }
