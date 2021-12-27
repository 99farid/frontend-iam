import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-users-view',
  templateUrl: './profile-users-view.component.html',
  styleUrls: ['./profile-users-view.component.css']
})
export class ProfileUsersViewComponent implements OnInit, OnDestroy {

  private obs?: Subscription

  constructor() { }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }

  ngOnInit(): void {
  }

}
