import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackActivityComponent } from './track-activity.component';
import { TrackActivityRoutingModule } from './track-activity-routing.module';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    TrackActivityComponent
  ],
  imports: [
    CommonModule,
    TrackActivityRoutingModule,
    NavbarModule,
    RouterModule,
    FormsModule,
    TableModule,
    ButtonModule
  ]
})
export class TrackActivityModule { }
