import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-role-permissions',
  templateUrl: './role-permissions.component.html',
  styleUrls: ['./role-permissions.component.css']
})
export class RolePermissionsComponent implements OnInit, OnDestroy {

  private obs?: Subscription

  listPerm: RolePermissions[] = []

  constructor(private router: Router) { }
  
  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }

  ngOnInit(): void {
    const rp1 = new RolePermissions()
    rp1.number = 1
    rp1.permName = "Create User"
    rp1.isActive = true
    this.listPerm.push(rp1)

    const rp2 = new RolePermissions()
    rp2.number = 2
    rp2.permName = "Create Profile"
    rp2.isActive = true
    this.listPerm.push(rp2)

    const rp3 = new RolePermissions()
    rp3.number = 3
    rp3.permName = "Create Role"
    rp3.isActive = true
    this.listPerm.push(rp3)
  }

  clickBack(){
    this.router.navigateByUrl('/roles-list')
  }

}

class RolePermissions {
  number?: number
  permName?: string
  isActive?: boolean
}

