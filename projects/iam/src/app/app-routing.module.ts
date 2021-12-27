import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


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
    loadChildren: () => import('../../../iam/src/app/pages/profile-users/profile-users.module').then(profileUsers => profileUsers.ProfileUsersModule)
  },
  {
    path: '',
    loadChildren: () => import('../../../iam/src/app/pages/roles/roles.module').then(roles => roles.RolesModule)
  },
  {
    path: '',
    loadChildren: () => import('../../../iam/src/app/pages/assets/assets.module').then(assets => assets.AssetsModule)
  },
  {
    path: '',
    loadChildren: () => import('../../../iam/src/app/pages/companies/companies.module').then(companies => companies.CompaniesModule)
  },
  {
    path: '',
    loadChildren: () => import('../../../iam/src/app/pages/users/users.module').then(users => users.UsersModule)
  },
  {
    path: '',
    loadChildren: () => import('../../../iam/src/app/pages/employees/employees.module').then(employees => employees.EmployeesModule)
  },
  {
    path: '',
    loadChildren: () => import('../../../iam/src/app/pages/permissions/permissions.module').then(permissions => permissions.PermissionsModule)
  },
  {
    path: '',
    loadChildren: () => import('../../../iam/src/app/pages/role-permissions/role-permissions.module').then(rolePermissions => rolePermissions.RolePermissionsModule)
  },



  {
    path: '',
    loadChildren: () => import('../../../iam/src/app/pages/track-activity/track-activity.module').then(trackActivity => trackActivity.TrackActivityModule)
  },
  {
    path: '',
    loadChildren: () => import('../../../iam/src/app/pages/transactions-in/transactions-in.module').then(transactionsIn => transactionsIn.TransactionsInModule)
  },
  {
    path: '',
    loadChildren: () => import('../../../iam/src/app/pages/transactions-out/transactions-out.module').then(transactionsOut => transactionsOut.TransactionsOutModule)
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
