import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FindAllResPemissionsDto } from 'projects/core/src/app/dto/permissions/find-all-res-pemissions-dto';
import { Permissions } from 'projects/core/src/app/model/permissions';
import { AuthenticationService } from 'projects/core/src/app/services/authentication/authentication.service';
import { PermissionsService } from 'projects/core/src/app/services/permissions/permissions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-permissions-list',
  templateUrl: './permissions-list.component.html',
  styleUrls: ['./permissions-list.component.css']
})
export class PermissionsListComponent implements OnInit, OnDestroy {

  allDataPermissions?: FindAllResPemissionsDto

  private obs?: Subscription
  
  listPermission: Permissions[] = []

  constructor(private router: Router, private permissionsService: PermissionsService,
    private authenticationService: AuthenticationService) { }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }

  ngOnInit(): void {
    this.allDataPermissions = new FindAllResPemissionsDto()
    this.permissionsService.findAllPermissions().subscribe(result => {
      this.allDataPermissions = result
      this.listPermission = this.allDataPermissions.data
    })
  }

  clickCreate(){
    this.router.navigateByUrl('/permissions-action/new')
  }

  clickUpdate(){
    this.router.navigateByUrl('/permissions-action/:id')
  }

  clickDelete(){
    this.router.navigateByUrl('/permissions-list')
  }

  clickBack(){
    this.router.navigateByUrl('/dashboard')
  }

}
