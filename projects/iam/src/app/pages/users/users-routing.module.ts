import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersActionComponent } from './users-action/users-action.component';
import { UsersListComponent } from './users-list/users-list.component';

const userRoutes: Routes = [
  {
    path: 'users-action/new',
    component: UsersActionComponent
  },
  {
    path: 'users-action/:id',
    component: UsersActionComponent
  },
  {
    path: 'users-list',
    component: UsersListComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }
