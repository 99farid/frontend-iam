import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TrackActivityComponent } from './track-activity.component';

const trackRoutes: Routes = [
  {
    path: 'track-activity',
    component: TrackActivityComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(trackRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TrackActivityRoutingModule { }
