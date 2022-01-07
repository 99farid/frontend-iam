import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FindAllResPemissionsDto } from 'projects/core/src/app/dto/permissions/find-all-res-pemissions-dto';
import { FindAllResFilterByRoleDto } from 'projects/core/src/app/dto/role-permissions/find-all-res-filter-by-role-dto';
import { FindAllResRolePermissionsDto } from 'projects/core/src/app/dto/role-permissions/find-all-res-role-permissions-dto';
import { FindByIdResRolesDto } from 'projects/core/src/app/dto/roles/find-by-id-res-roles-dto';
import { InsertReqDataRolesDto } from 'projects/core/src/app/dto/roles/insert-req-data-roles-dto';
import { UpdateReqRolesDto } from 'projects/core/src/app/dto/roles/update-req-roles-dto';
import { Permissions } from 'projects/core/src/app/model/permissions';
import { RolePermissions } from 'projects/core/src/app/model/role-permissions';
import { Roles } from 'projects/core/src/app/model/roles';
import { PermissionsService } from 'projects/core/src/app/services/permissions/permissions.service';
import { RolePermissionsService } from 'projects/core/src/app/services/role-permissions/role-permissions.service';
import { RolesService } from 'projects/core/src/app/services/roles/roles.service';

@Component({
  selector: 'app-roles-action',
  templateUrl: './roles-action.component.html',
  styleUrls: ['./roles-action.component.css']
})
export class RolesActionComponent implements OnInit {

  dataInsert: InsertReqDataRolesDto = new InsertReqDataRolesDto()
  dataUpdate: UpdateReqRolesDto = new UpdateReqRolesDto()
  role: Roles = new Roles()

  listPermission: FindAllResPemissionsDto = new FindAllResPemissionsDto()
  filterPermission: FindAllResPemissionsDto = new FindAllResPemissionsDto()
  listRolePerm: FindAllResFilterByRoleDto = new FindAllResFilterByRoleDto()

  isDisabled: boolean = false

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private rolesService: RolesService, private permissionsService: PermissionsService,
    private rolePermissionsService: RolePermissionsService, private titLeService: Title) {
    titLeService.setTitle('Role Form')
  }

  ngOnInit(): void {
    this.permissionsService.findAllPermissions().subscribe(result => {
      this.listPermission = result
    })
    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      this.rolesService.findByIdRoles(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(
        result => {
          const rolesResult: FindByIdResRolesDto = result
          this.role = rolesResult.data
          this.dataUpdate.id = this.role.id
          this.isDisabled = true

          this.rolePermissionsService.findAllFilterByRole(this.role.id).subscribe(
            result => {
              this.listRolePerm = result
            })
        })
    }
  }


  clickSubmit() {
    this.filterPermission.data = []
    this.dataInsert.idPermission = []
    // this.dataInsert.isActive = true
    this.filterPermission.data = this.listPermission.data.filter(result=> 
      result.isActive == true
    )
   
    for (let d of this.filterPermission.data){
      this.dataInsert.idPermission.push(d.id)
    }
    if (this.dataUpdate.id) {
      this.dataUpdate.roleName = this.dataInsert.roleName
      this.rolesService.update(this.dataUpdate).subscribe({
        next: result => {
          this.router.navigateByUrl('/roles')
        }
      })
    } else {
      this.rolesService.insert(this.dataInsert).subscribe({
        next: result => {
          this.router.navigateByUrl('/roles')
        }
      })
    }
  }

  clickBack() {
    this.router.navigateByUrl('/roles')
  }

}