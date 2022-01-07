import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { FindAllResPemissionsDto } from 'projects/core/src/app/dto/permissions/find-all-res-pemissions-dto';
import { Permissions } from 'projects/core/src/app/model/permissions';
import { AuthenticationService } from 'projects/core/src/app/services/authentication/authentication.service';
import { PermissionsService } from 'projects/core/src/app/services/permissions/permissions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-permissions-list',
  templateUrl: './permissions-list.component.html',
  styleUrls: ['./permissions-list.component.css'],
  providers: [ConfirmationService]
})
export class PermissionsListComponent implements OnInit, OnDestroy {

  allDataPermissions?: FindAllResPemissionsDto

  private obs?: Subscription

  listPermission: Permissions[] = []

  constructor(private router: Router, private permissionsService: PermissionsService,
    private confirmationService: ConfirmationService, private titLeService: Title) {
    titLeService.setTitle('Permission')
  }

  ngOnInit(): void {
    this.initData()
  }

  initData(): void {
    this.allDataPermissions = new FindAllResPemissionsDto()
    this.permissionsService.findAllPermissions().subscribe(result => {
      this.allDataPermissions = result
      this.listPermission = this.allDataPermissions.data
    })
  }

  clickCreate(): void {
    this.router.navigateByUrl('/permissions/new')
  }

  clickUpdate(id: string): void {
    this.router.navigateByUrl(`/permissions/modify/${id}`)
  }

  confirm(id: string): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to Remove?',
      accept: () => {
        this.permissionsService.delete(id).subscribe({
          next: result => {
            this.initData()
          }
        })
      }
    });
  }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }
}