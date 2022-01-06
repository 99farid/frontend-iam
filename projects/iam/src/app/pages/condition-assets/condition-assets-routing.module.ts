import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConditionAssetsActionComponent } from './condition-assets-action/condition-assets-action.component';
import { ConditionAssetsListComponent } from './condition-assets-list/condition-assets-list.component';
import { PermissionGuardGuard } from 'projects/core/src/app/services/permission-guard/permission-guard.guard';

const routes : Routes = [
  {
    path: 'condition-assets/new',
    component: ConditionAssetsActionComponent,
    canActivate : [PermissionGuardGuard]
  },
  {
    path: 'condition-assets/modify/:id',
    component: ConditionAssetsActionComponent,
    canActivate : [PermissionGuardGuard]
  },
  {
    path: 'condition-assets',
    component : ConditionAssetsListComponent,
    canActivate : [PermissionGuardGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ConditionAssetsRoutingModule { }
