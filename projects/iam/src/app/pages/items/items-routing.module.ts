import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemsListComponent } from './items-list/items-list.component';
import { PermissionGuardGuard } from 'projects/core/src/app/services/permission-guard/permission-guard.guard';
import { AuthGuard } from 'projects/core/src/app/services/authguard/auth.guard';

const routes : Routes = [
  {
    path : 'items-detail/:id',
    component : ItemsListComponent,
    canActivate : [AuthGuard, PermissionGuardGuard]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class ItemsRoutingModule { }
