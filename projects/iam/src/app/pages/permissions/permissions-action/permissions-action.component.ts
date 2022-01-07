import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FindByIdResPermissionsDto } from 'projects/core/src/app/dto/permissions/find-by-id-res-permissions-dto';
import { Permissions } from 'projects/core/src/app/model/permissions';
import { PermissionsService } from 'projects/core/src/app/services/permissions/permissions.service';

@Component({
  selector: 'app-permissions-action',
  templateUrl: './permissions-action.component.html',
  styleUrls: ['./permissions-action.component.css']
})
export class PermissionsActionComponent implements OnInit {

  dataInsert: Permissions = new Permissions()

  dataUpdate: Permissions = new Permissions()

  isDisabled: boolean = false

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private permissionsService: PermissionsService, private titLeService: Title) {
    titLeService.setTitle('Permission Form')
  }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      this.permissionsService.findByIdPermissions(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(
        result => {
          const permissionsResult: FindByIdResPermissionsDto = result
          this.dataUpdate = permissionsResult.data
          this.isDisabled = true

          this.dataInsert.id = this.dataUpdate.id
          this.dataInsert.code = this.dataUpdate.code
          this.dataInsert.version = this.dataUpdate.version
          this.dataInsert.createdBy = this.dataUpdate.createdBy
          this.dataInsert.createdDate = this.dataUpdate.createdDate
        })
    }
  }

  clickSubmit() {
    if (this.dataInsert.id) {
      this.permissionsService.update(this.dataInsert).subscribe({
        next: result => {
          this.router.navigateByUrl('/permissions')
        }
      })
    } else {
      this.permissionsService.insert(this.dataInsert).subscribe({
        next: result => {
          this.router.navigateByUrl('/permissions')
        }
      })
    }
  }

  clickBack() {
    this.router.navigateByUrl('/permissions')
  }
}