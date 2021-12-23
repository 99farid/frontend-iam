import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConditionAssetsComponent } from '../condition-assets.component';
import { ConditionAssetsActionComponent } from './condition-assets-action/condition-assets-action.component';
import { ConditionAssetsListComponent } from './condition-assets-list/condition-assets-list.component';



@NgModule({
  declarations: [
    ConditionAssetsComponent,
    ConditionAssetsActionComponent,
    ConditionAssetsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ConditionAssetsModule { }
