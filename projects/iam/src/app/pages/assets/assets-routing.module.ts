import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AssetsActionComponent } from './assets-action/assets-action.component';
import { AssetsListComponent } from './assets-list/assets-list.component';
import { AssetsExpiredComponent } from './assets-expired/assets-expired.component';

const assetRoutes : Routes = [
  {
    path: 'assets-in/new',
    component: AssetsActionComponent
  },
  {
    path: 'assets-in/modify/:id',
    component: AssetsActionComponent
  },
  {
    path: 'assets-in',
    component : AssetsListComponent
  },
  {
    path: 'assets-expired',
    component : AssetsExpiredComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(assetRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AssetsRoutingModule { }
