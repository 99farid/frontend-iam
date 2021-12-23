import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const appRoutes : Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '', 
    redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('../../../iam/src/app/pages/login/login.module').then(login => login.LoginModule)
  },
  {
    path: '',
    loadChildren: () => import('../../../iam/src/app/pages/dashboard/dashboard.module').then(dashboard => dashboard.DashboardModule)
  },
  {
    path: '',
    loadChildren: () => import('../../../iam/src/app/pages/roles/roles.module').then(roles => roles.RolesModule)
  },
  {
    path: '',
    loadChildren: () => import('../../../iam/src/app/pages/transactions-in/transactions-in.module').then(transactionsIn => transactionsIn.TransactionsInModule)
  },



  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
