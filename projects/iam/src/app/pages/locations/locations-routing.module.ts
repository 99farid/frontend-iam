import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LocationsActionComponent } from './locations-action/locations-action.component';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { PermissionGuardGuard } from 'projects/core/src/app/services/permission-guard/permission-guard.guard';

const routes: Routes = [
  {
    path : "locations/new",
    component : LocationsActionComponent,
    canActivate : [PermissionGuardGuard]

  },
  {
    path : "locations/modify/:id",
    component : LocationsActionComponent,
    canActivate : [PermissionGuardGuard]
  },
  {
    path : "locations",
    component : LocationsListComponent,
    canActivate : [PermissionGuardGuard]
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
export class LocationsRoutingModule { }
