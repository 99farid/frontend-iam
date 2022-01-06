import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from 'projects/core/src/app/services/authguard/auth.guard';
import { PermissionGuardGuard } from 'projects/core/src/app/services/permission-guard/permission-guard.guard';


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
    loadChildren: () => import('../../../iam/src/app/pages/dashboard/dashboard.module').then(dashboard => dashboard.DashboardModule),
    canActivate : [AuthGuard]
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
    loadChildren: () => import('../../../iam/src/app/pages/condition-assets/condition-assets.module').then(result => result.ConditionAssetsModule)

  },
  {
    path: '',
    loadChildren: () => import('../../../iam/src/app/pages/item-types/item-types.module').then(result => result.ItemTypesModule)
  },
  {
    path: '',
    loadChildren: () => import('../../../iam/src/app/pages/locations/locations.module').then(result => result.LocationsModule)
  },
  {
    path: '',
    loadChildren: () => import('../../../iam/src/app/pages/status-assets/status-assets.module').then(result => result.StatusAssetsModule)
  },
  {
    path: '',
    loadChildren: () => import('../../../iam/src/app/pages/invoices/invoices.module').then(result => result.InvoicesModule)
  },
  {
    path: '',
    loadChildren: () => import('../../../iam/src/app/pages/items/items.module').then(result => result.ItemsModule)
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
