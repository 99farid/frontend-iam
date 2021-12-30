import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateResDto } from 'projects/core/src/app/dto/all-dto-global/update-res-dto';
import { FindByIdResFilesDto } from 'projects/core/src/app/dto/files/find-by-id-res-files-dto';
import { FindByIdResProfileUsersDto } from 'projects/core/src/app/dto/profile-users/find-by-id-res-profile-users-dto';
import { FindByResUserIdDto } from 'projects/core/src/app/dto/profile-users/find-by-res-user-id-dto';
import { InsertReqDataProfileUsersDto } from 'projects/core/src/app/dto/profile-users/insert-res-data-profile-users-dto';
import { Employees } from 'projects/core/src/app/model/employees';
import { Files } from 'projects/core/src/app/model/files';
import { ProfileUsers } from 'projects/core/src/app/model/profile-users';
import { Users } from 'projects/core/src/app/model/users';
import { AuthenticationService } from 'projects/core/src/app/services/authentication/authentication.service';
import { ProfileUsersService } from 'projects/core/src/app/services/profile-users/profile-users.service';
import { UsersService } from 'projects/core/src/app/services/users/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-users-view',
  templateUrl: './profile-users-view.component.html',
  styleUrls: ['./profile-users-view.component.css']
})
export class ProfileUsersViewComponent implements OnInit, OnDestroy {

  dataInsert: InsertReqDataProfileUsersDto = new InsertReqDataProfileUsersDto()
  dataUpdate: ProfileUsers = new ProfileUsers()

  profile: ProfileUsers = new ProfileUsers()
  employee: Employees = new Employees()
  users: Users = new Users()

  files: FindByIdResFilesDto = new FindByIdResFilesDto()

  changePassUser: UpdateResDto = new UpdateResDto()

  pass: string = ""

  findByUserId = FindByResUserIdDto

  private obs?: Subscription

  isDisabled: boolean = false

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private profileUsersService: ProfileUsersService, private usersService: UsersService,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.profileUsersService.findByUserId().subscribe(
      result => {
        const profileResult: FindByResUserIdDto = result
        this.profile = profileResult.data
        this.dataUpdate.id = this.profile.id
        this.isDisabled = true

      })
    

  }
  isDisplayAvail(data: Files): boolean {
    if (data) {
      return true;
    }
    return false
  }

  clickSave(): void {
    if (this.dataUpdate.id) {
      this.profileUsersService.update(this.dataUpdate).subscribe({
        next: result => {
          this.router.navigateByUrl('/profile-users-view')
        }
      })
    } else {
      this.profileUsersService.insert(this.dataInsert).subscribe({
        next: result => {
          this.router.navigateByUrl('/profile-users-view')
        }
      })
    }
  }

  clickChangePass(): void {
    if (this.pass) {
      this.usersService.updatePassword(this.pass).subscribe({

      })
    } else {
      window.location.reload()
    }
  }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }
}
