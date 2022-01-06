import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemTypesActionComponent } from './item-types-action/item-types-action.component';
import { ItemTypesListComponent } from './item-types-list/item-types-list.component';
import { PermissionGuardGuard } from 'projects/core/src/app/services/permission-guard/permission-guard.guard';

const routes : Routes = [
  {
    path : 'item-types/new',
    component : ItemTypesActionComponent,
    canActivate : [PermissionGuardGuard]
  },
  {
    path : 'item-types/modify/:id',
    component : ItemTypesActionComponent,
    canActivate : [PermissionGuardGuard]
  },
  {
    path : 'item-types',
    component : ItemTypesListComponent,
    canActivate : [PermissionGuardGuard]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class ItemTypesRoutingModule { }
