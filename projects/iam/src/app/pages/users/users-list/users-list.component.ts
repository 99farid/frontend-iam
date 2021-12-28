import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FindAllResUsersDto } from 'projects/core/src/app/dto/users/find-all-res-users-dto';
import { Users } from 'projects/core/src/app/model/users';
import { AuthenticationService } from 'projects/core/src/app/services/authentication/authentication.service';
import { UsersService } from 'projects/core/src/app/services/users/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {

  allDataUsers?: FindAllResUsersDto

  private obs?: Subscription

  listUser: Users[] = []

  constructor(private router: Router, private usersService: UsersService,
    private authService: AuthenticationService) { }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }

  ngOnInit(): void {
    this.allDataUsers = new FindAllResUsersDto()
    this.usersService.findAllUsers().subscribe(result => {
      this.allDataUsers = result
      this.listUser = this.allDataUsers.data
    })

    // const users1 = new Users()
    // users1.number = 1
    // users1.roleName = "Super Admin"
    // users1.email = "superadmin@gmail.com"
    // users1.isActive = true
    // this.listUsers.push(users1)

    // const users2 = new Users()
    // users2.number = 2
    // users2.roleName = "Non-Admin"
    // users2.email = "jhonnugraha@gmail.com"
    // users2.isActive = true
    // this.listUsers.push(users2)

    // const users3 = new Users()
    // users3.number = 3
    // users3.roleName = "Admin"
    // users3.email = "desakayuputu5@gmail.com"
    // users3.isActive = true
    // this.listUsers.push(users3)
  }

  clickCreate(){
    this.router.navigateByUrl('/users-action/new')
  }

  clickUpdate(){
    this.router.navigateByUrl('/users-action/:id')
  }

  clickDelete(){
    this.router.navigateByUrl('/users-list')
  }

  clickBack(){
    this.router.navigateByUrl('/dashboard')
  }

}

// class Users {
//   number?: number
//   roleName?: string
//   email?: string
//   isActive?: boolean
// }
