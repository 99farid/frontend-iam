import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemTypesActionComponent } from './item-types-action/item-types-action.component';
import { ItemTypesListComponent } from './item-types-list/item-types-list.component';

const routes : Routes = [
  {
    path : 'item-types-action/new',
    component : ItemTypesActionComponent
  },
  {
    path : 'item-types-action/:id',
    component : ItemTypesActionComponent
  },
  {
    path : 'item-types-list',
    component : ItemTypesListComponent
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
