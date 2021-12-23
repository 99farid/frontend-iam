import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsComponent } from './locations.component';
import { LocationsRoutingComponent } from './locations-routing.component';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { LocationsActionComponent } from './locations-action/locations-action.component';



@NgModule({
  declarations: [
    LocationsComponent,
    LocationsRoutingComponent,
    LocationsListComponent,
    LocationsActionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LocationsModule { }
