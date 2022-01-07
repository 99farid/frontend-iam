import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { RupiahPipe } from 'projects/core/src/app/util/rupiah-pipe';
import { NgxLoadingModule } from 'ngx-loading';


@NgModule({
  declarations: [
    DashboardComponent,
    RupiahPipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NavbarModule,
    NgxLoadingModule
  ]
})
export class DashboardModule { }
