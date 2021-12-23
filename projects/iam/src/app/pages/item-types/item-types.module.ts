import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemTypesActionComponent } from './item-types-action/item-types-action.component';
import { ItemTypesListComponent } from './item-types-list/item-types-list.component';



@NgModule({
  declarations: [
    ItemTypesActionComponent,
    ItemTypesListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ItemTypesModule { }
