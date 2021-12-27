import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {

  private obs?: Subscription

  listUsers: Users[] = []

  constructor(private router: Router) { }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }

  ngOnInit(): void {
    const users1 = new Users()
    users1.number = 1
    users1.roleName = "Super Admin"
    users1.email = "superadmin@gmail.com"
    users1.isActive = true
    this.listUsers.push(users1)

    const users2 = new Users()
    users2.number = 2
    users2.roleName = "Non-Admin"
    users2.email = "jhonnugraha@gmail.com"
    users2.isActive = true
    this.listUsers.push(users2)

    const users3 = new Users()
    users3.number = 3
    users3.roleName = "Admin"
    users3.email = "desakayuputu5@gmail.com"
    users3.isActive = true
    this.listUsers.push(users3)
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

class Users {
  number?: number
  roleName?: string
  email?: string
  isActive?: boolean
}
