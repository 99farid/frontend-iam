import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';

const loginRoutes: Routes = [
  {
    path : 'login',
    component : LoginComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes)
  ]
})
export class LoginRoutingModule { }
