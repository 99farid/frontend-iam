import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { RolePermissions } from '../../model/role-permissions';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuardGuard implements CanActivate {
  listRolePermission: RolePermissions[] | undefined
  constructor(private authService: AuthenticationService, private toastr: ToastrService) {
    this.listRolePermission = this.authService.getPermission()
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.listRolePermission) {
      if (!state.url.includes('modify') && !state.url.includes('detail')) {
        for (const rolePermission of this.listRolePermission) {
          if (state.url == rolePermission.permission.permissionLink) {
            return true;
          }
        }
      } else {
        for (const rolePermission of this.listRolePermission) {
          if (state.url.includes(rolePermission.permission.permissionLink)) {
            return true;
          }
        }
      }
    }

    this.toastr.error("Invalid Permission", 'Error')
    return false;
  }
}