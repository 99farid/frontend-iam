import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RolePermissions } from '../../model/role-permissions';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuardGuard implements CanActivate {
  listRolePermission : RolePermissions[] | undefined
  constructor(private authService: AuthenticationService) {
    this.listRolePermission = this.authService.getPermission()
   }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.listRolePermission){
        if(!state.url.includes('modify') && !state.url.includes('detail')){
          console.log("X")
          for (const rolePermission of this.listRolePermission) {
            console.log(state.url, "url")
            console.log(rolePermission.permission.permissionLink, "permission")
            if(state.url == rolePermission.permission.permissionLink){
              return true;
            }
          }
        }else {
          console.log("Xx")
          for (const rolePermission of this.listRolePermission) {
            console.log(rolePermission.permission.permissionLink, "permission2")
            console.log(state.url, "url")
            if(state.url.includes(rolePermission.permission.permissionLink) ){
              return true;
            }
          }
        }
        
      }
      
      console.log("false")
      return false;
      
      
  }
  
}
