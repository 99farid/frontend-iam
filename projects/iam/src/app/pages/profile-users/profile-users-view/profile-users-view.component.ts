import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateResDto } from 'projects/core/src/app/dto/all-dto-global/update-res-dto';
import { FindByResNipDto } from 'projects/core/src/app/dto/employees/find-by-res-nip-dto';
import { FindByIdResFilesDto } from 'projects/core/src/app/dto/files/find-by-id-res-files-dto';
import { FindByIdResProfileUsersDto } from 'projects/core/src/app/dto/profile-users/find-by-id-res-profile-users-dto';
import { FindByResUserIdDto } from 'projects/core/src/app/dto/profile-users/find-by-res-user-id-dto';
import { InsertReqDataProfileUsersDto } from 'projects/core/src/app/dto/profile-users/insert-res-data-profile-users-dto';
import { Employees } from 'projects/core/src/app/model/employees';
import { Files } from 'projects/core/src/app/model/files';
import { ProfileUsers } from 'projects/core/src/app/model/profile-users';
import { Roles } from 'projects/core/src/app/model/roles';
import { Users } from 'projects/core/src/app/model/users';
import { AuthenticationService } from 'projects/core/src/app/services/authentication/authentication.service';
import { EmployeesService } from 'projects/core/src/app/services/employees/employees.service';
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

  id: string = String(this.activatedRoute.snapshot.paramMap.get('id'))

  isDisabled: boolean = false
  isCreate: boolean = false
  isNip: boolean = false
  isChangePict: boolean = false

  pass: string = ""
  nip: string = ""
  receiver: string = ''
  phoneNo: string = ''
  department: string = ''

  selectedDisplay!: FileList
  fileDisplay!: File | null

  private obs?: Subscription

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private profileUsersService: ProfileUsersService, private employeesService: EmployeesService,
    private usersService: UsersService, private titLeService: Title) {
    titLeService.setTitle('Profile')
  }

  ngOnInit(): void {
    this.profileUsersService.findByUserId().subscribe(
      result => {
        if (result && result.data && result.data.employee && result.data.user) {
          const profileResult: FindByResUserIdDto = result
          this.profile = profileResult.data
          this.employee = this.profile?.employee
          this.users = this.profile?.user

          this.dataUpdate = this.profile
          this.isDisabled = true
          this.isNip = true
          this.isChangePict = false
        } else {
          this.isCreate = true
          this.isNip = false
        }

      })
  }

  clickFind(): void {
    this.employeesService.findByNip(this.nip).subscribe(
      {
        next: result => {
          const findNip: FindByResNipDto = result
          this.employee = result.data
          this.receiver = this.employee.fullName
          this.phoneNo = this.employee.phoneNo
          this.department = this.employee.department

          this.dataInsert.idEmployee = this.employee.id
        },
        error: err => {
          this.employee.fullName = "-"
        }
      })
  }

  inputDisplay(event: any) {
    this.selectedDisplay = event.target.files
    if (this.selectedDisplay) {
      this.fileDisplay = this.selectedDisplay.item(0)
    }
  }

  isDisplayAvail(data: Files): boolean {
    if (data) {
      return true;
    }
    return false
  }

  clickSave(): void {
    if (this.dataUpdate.id) {
      if (this.fileDisplay) {
        this.profileUsersService.update(this.dataUpdate, this.fileDisplay).subscribe({
          next: result => {
            window.location.reload()
          }
        })
      }
    } else {
      if (this.fileDisplay) {
        this.profileUsersService.insert(this.dataInsert, this.fileDisplay).subscribe({
          next: result => {
            window.location.reload()
          }
        })
      }
    }
  }

  clickChangePass(): void {
    if (this.pass) {
      this.usersService.updatePassword(this.pass).subscribe({
        next: result => {
          window.location.reload()
        }
      })
    } else {
      window.location.reload()
    }
  }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }
}