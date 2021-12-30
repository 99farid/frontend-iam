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
  }

  clickCreate(): void {
    this.router.navigateByUrl('/users-action/new')
  }

  clickUpdate(id: string): void {
    this.router.navigateByUrl(`/users-action/${id}`)
  }

  clickDelete(id: string): void {
    this.usersService.delete(id).subscribe({
      next: result => {
        window.location.reload()
      }
    })
    this.router.navigateByUrl('/users-list')
  }
}
