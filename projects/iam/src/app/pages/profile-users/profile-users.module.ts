import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileUsersListComponent } from './profile-users-list/profile-users-list.component';
import { ProfileUsersActionComponent } from './profile-users-action/profile-users-action.component';
import { ProfileUsersViewComponent } from './profile-users-view/profile-users-view.component';
import { ProfileUsersRoutingModule } from './profile-users-routing.module';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    ProfileUsersListComponent,
    ProfileUsersActionComponent,
    ProfileUsersViewComponent
  ],
  imports: [
    CommonModule,
    ProfileUsersRoutingModule,
    NavbarModule,
    RouterModule,
    FormsModule,
    ButtonModule

  ]
})
export class ProfileUsersModule { }
