import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { StatusAssetsActionComponent } from './status-assets-action/status-assets-action.component';
import { StatusAssetsListComponent } from './status-assets-list/status-assets-list.component';

const routes : Routes = [
  {
    path : "status-assets/new",
    component : StatusAssetsActionComponent
  },
  {
    path : "status-assets/modify/:id",
    component : StatusAssetsActionComponent
  },
  {
    path : "status-assets",
    component : StatusAssetsListComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class StatusAssetsRoutingModule { }
