import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusAssetsComponent } from './status-assets.component';
import { StatusAssetsListComponent } from './status-assets-list/status-assets-list.component';
import { StatusAssetsActionComponent } from './status-assets-action/status-assets-action.component';



@NgModule({
  declarations: [
    StatusAssetsComponent,
    StatusAssetsListComponent,
    StatusAssetsActionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StatusAssetsModule { }
