import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FindByResUserIdDto } from 'projects/core/src/app/dto/profile-users/find-by-res-user-id-dto';
import { Employees } from 'projects/core/src/app/model/employees';
import { ProfileUsers } from 'projects/core/src/app/model/profile-users';
import { Users } from 'projects/core/src/app/model/users';
import { AuthenticationService } from 'projects/core/src/app/services/authentication/authentication.service';
import { EmployeesService } from 'projects/core/src/app/services/employees/employees.service';
import { ProfileUsersService } from 'projects/core/src/app/services/profile-users/profile-users.service';
import { UsersService } from 'projects/core/src/app/services/users/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  profile: ProfileUsers = new ProfileUsers()
  employee: Employees = new Employees()
  users: Users = new Users()
  
  fullName: string = 'Profile Not Found'
  roleName: string = 'Profile Not Found'

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private profileUsersService: ProfileUsersService, private employeesService: EmployeesService,
    private usersService: UsersService, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.profileUsersService.findByUserId().subscribe(
      result => {
        if (result && result.data && result.data.employee && result.data.user) {
          const profileResult: FindByResUserIdDto = result
          this.profile = profileResult.data
          this.employee = this.profile?.employee
          this.fullName = this.employee.fullName
          this.users = this.profile?.user
          this.roleName = this.users.role.roleName
        }
      })
  }

  hamClick() {
    const body = document.getElementsByTagName('body')[0];
    if (body.className.match("toggle-sidebar")){
      body.classList.remove("toggle-sidebar")
    } else {
      body.classList.add("toggle-sidebar")
    }
  }

  handleClickLogin() {
    this.router.navigateByUrl('/dashboard')
  }
}
