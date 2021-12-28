import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FindAllResFilterByRoleDto } from 'projects/core/src/app/dto/role-permissions/find-all-res-filter-by-role-dto';
import { FindAllResRolePermissionsDto } from 'projects/core/src/app/dto/role-permissions/find-all-res-role-permissions-dto';
import { FindByIdResRolePermissionsDto } from 'projects/core/src/app/dto/role-permissions/find-by-id-res-role-permissions-dto';
import { FindByIdResRolesDto } from 'projects/core/src/app/dto/roles/find-by-id-res-roles-dto';
import { RolePermissions } from 'projects/core/src/app/model/role-permissions';
import { Roles } from 'projects/core/src/app/model/roles';
import { AuthenticationService } from 'projects/core/src/app/services/authentication/authentication.service';
import { RolePermissionsService } from 'projects/core/src/app/services/role-permissions/role-permissions.service';
import { RolesService } from 'projects/core/src/app/services/roles/roles.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-role-permissions',
  templateUrl: './role-permissions.component.html',
  styleUrls: ['./role-permissions.component.css']
})
export class RolePermissionsComponent implements OnInit, OnDestroy {

  rolePermById!: FindAllResFilterByRoleDto

  private obs?: Subscription

  listRolePerm: RolePermissions[] = []

  id: string = String(this.router.snapshot.paramMap.get('id'))

  constructor(private router: ActivatedRoute, private routers: Router, 
    private rolePermissionsService: RolePermissionsService, private authService: AuthenticationService) { }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }

  ngOnInit(): void {
    if (this.id) {
      this.obs = this.rolePermissionsService.findAllFilterByRoleDto(this.id)?.subscribe(result => {
        this.rolePermById = result
        this.listRolePerm = this.rolePermById.data
      })
    }
  }

  clickBack() {
    this.routers.navigateByUrl('/roles-list')
  }

}

