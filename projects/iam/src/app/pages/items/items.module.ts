import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemsActionComponent } from './items-action/items-action.component';



@NgModule({
  declarations: [
    ItemsComponent,
    ItemsListComponent,
    ItemsActionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ItemsModule { }
