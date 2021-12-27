import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users-action',
  templateUrl: './users-action.component.html',
  styleUrls: ['./users-action.component.css']
})
export class UsersActionComponent implements OnInit, OnDestroy {

  private obs?: Subscription

  constructor(private router: Router) { }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }
  

  ngOnInit(): void {

  }

  clickSubmit(){
    this.router.navigateByUrl('/users-list')
  }

  clickBack(){
    this.router.navigateByUrl('/dashboard')
  }


}