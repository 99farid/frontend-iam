import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { FindAllResUsersDto } from 'projects/core/src/app/dto/users/find-all-res-users-dto';
import { Users } from 'projects/core/src/app/model/users';
import { AuthenticationService } from 'projects/core/src/app/services/authentication/authentication.service';
import { UsersService } from 'projects/core/src/app/services/users/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers: [ConfirmationService]
})
export class UsersListComponent implements OnInit, OnDestroy {

  allDataUsers?: FindAllResUsersDto

  private obs?: Subscription

  listUser: Users[] = []

  constructor(private router: Router, private authService: AuthenticationService, 
    private usersService: UsersService, private confirmationService: ConfirmationService ) { }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }

  ngOnInit(): void {
   this.initData()
  }

  initData(): void {
    this.allDataUsers = new FindAllResUsersDto()
    this.usersService.findAllUsers().subscribe(result => {
      this.allDataUsers = result
      this.listUser = this.allDataUsers.data
    })
  }

  clickCreate(): void {
    this.router.navigateByUrl('/users/new')
  }

  clickUpdate(id: string): void {
    this.router.navigateByUrl(`/users/modify/${id}`)
  }

  confirm(id: string): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to Remove?',
      accept: () => {
        this.usersService.delete(id).subscribe({
          next: result => {
            this.initData()
          }
        })
      }
    });
  }
}
