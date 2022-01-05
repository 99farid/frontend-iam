import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {RolePermissions} from '../../model/role-permissions'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  listRolePermission : RolePermissions[] = []
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(state.url)
      // for (const rolePermission of this.listRolePermission) {
      //   if(state.url.includes(rolePermission.permission.permissionLink)){
      //     return true;
      //   }
      // }
      
      return true;
  }
  
}
