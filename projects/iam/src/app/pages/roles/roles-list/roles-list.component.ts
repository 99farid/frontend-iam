import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FindAllResRolesDto } from 'projects/core/src/app/dto/roles/find-all-res-roles-dto';
import { Roles } from 'projects/core/src/app/model/roles';
import { AuthenticationService } from 'projects/core/src/app/services/authentication/authentication.service';
import { RolesService } from 'projects/core/src/app/services/roles/roles.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit, OnDestroy {

  allDataRoles?: FindAllResRolesDto

  private obs?: Subscription

  listRole: Roles[] = []

  constructor(private router: Router, private rolesService: RolesService,
    private titLeService: Title) {
    titLeService.setTitle('Role')
  }

  ngOnInit(): void {
    this.allDataRoles = new FindAllResRolesDto
    this.rolesService.findAllRoles().subscribe(result => {
      this.allDataRoles = result
      this.listRole = this.allDataRoles.data
    })
  }

  clickCreate(): void {
    this.router.navigateByUrl('/roles/new')
  }

  clickDetail(id?: string) {
    this.router.navigateByUrl(`/role-permissions/detail/${id}`)
  }

  clickUpdate(id: string): void {
    this.router.navigateByUrl(`/roles/modify/${id}`)
  }

  clickDelete(id: string): void {
    this.rolesService.delete(id).subscribe({
      next: result => {
        window.location.reload()
      }
    })
    this.router.navigateByUrl('/roles')
  }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }
}