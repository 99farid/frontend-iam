import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AssetsActionComponent } from './assets-action/assets-action.component';
import { AssetsListComponent } from './assets-list/assets-list.component';
import { AssetsExpiredComponent } from './assets-expired/assets-expired.component';
import { PermissionGuardGuard } from 'projects/core/src/app/services/permission-guard/permission-guard.guard';
import { AuthGuard } from 'projects/core/src/app/services/authguard/auth.guard';


const assetRoutes : Routes = [
  {
    path: 'new',
    component: AssetsActionComponent,
    canActivate : [AuthGuard, PermissionGuardGuard]

  },
  {
    path: 'modify/:id',
    component: AssetsActionComponent,
    canActivate : [AuthGuard, PermissionGuardGuard]
  },
  {
    path: '',
    component : AssetsListComponent,
    canActivate : [AuthGuard, PermissionGuardGuard]
  },
  {
    path: 'expired',
    component : AssetsExpiredComponent,
    canActivate : [AuthGuard, PermissionGuardGuard]
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
