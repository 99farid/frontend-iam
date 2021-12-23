import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsComponent } from './assets.component';
import { AssetsListComponent } from './assets-list/assets-list.component';
import { AssetsActionComponent } from './assets-action/assets-action.component';



@NgModule({
  declarations: [
    AssetsComponent,
    AssetsListComponent,
    AssetsActionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AssetsModule { }
