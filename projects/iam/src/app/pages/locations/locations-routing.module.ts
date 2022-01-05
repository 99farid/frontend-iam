import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LocationsActionComponent } from './locations-action/locations-action.component';
import { LocationsListComponent } from './locations-list/locations-list.component';

const routes: Routes = [
  {
    path : "locations/new",
    component : LocationsActionComponent
  },
  {
    path : "locations/modify/:id",
    component : LocationsActionComponent
  },
  {
    path : "locations",
    component : LocationsListComponent
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
