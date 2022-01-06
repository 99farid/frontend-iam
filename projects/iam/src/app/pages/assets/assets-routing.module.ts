import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AssetsActionComponent } from './assets-action/assets-action.component';
import { AssetsListComponent } from './assets-list/assets-list.component';
import { AssetsExpiredComponent } from './assets-expired/assets-expired.component';
import { PermissionGuardGuard } from 'projects/core/src/app/services/permission-guard/permission-guard.guard';


const assetRoutes : Routes = [
  {
    path: 'assets-in/new',
    component: AssetsActionComponent,
    canActivate : [PermissionGuardGuard]

  },
  {
    path: 'assets-in/modify/:id',
    component: AssetsActionComponent,
    canActivate : [PermissionGuardGuard]
  },
  {
    path: 'assets-in',
    component : AssetsListComponent,
    canActivate : [PermissionGuardGuard]
  },
  {
    path: 'assets-expired',
    component : AssetsExpiredComponent,
    canActivate : [PermissionGuardGuard]
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
