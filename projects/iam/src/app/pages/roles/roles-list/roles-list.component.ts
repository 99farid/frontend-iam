import { Component, OnDestroy, OnInit } from '@angular/core';
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
    private authenticationService: AuthenticationService) { }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }

  ngOnInit(): void {
   this.allDataRoles = new FindAllResRolesDto
   this.rolesService.findAllRoles().subscribe(result => {
     this.allDataRoles = result
     this.listRole = this.allDataRoles.data
   })
  }

  clickCreate(){
    this.router.navigateByUrl('/roles-action/new')
  }

  clickDetail(id?: string){
    this.router.navigateByUrl(`/role-permissions/${id}`)
  }

  clickUpdate(){
    this.router.navigateByUrl('/roles-action/:id')
  }

  clickDelete(){
    this.router.navigateByUrl('/roles-list')
  }

  clickBack(){
    this.router.navigateByUrl('/dashboard')
  }

}