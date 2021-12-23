import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit {

  listRole: Role[] = []

  constructor(private router: Router) { }

  ngOnInit(): void {
    const role1 = new Role()
    role1.number = 1
    role1.codeRole = "RLS1"
    role1.nameRole = "Super Admin"
    role1.isActive = true
    this.listRole.push(role1)

    const role2 = new Role()
    role2.number = 2
    role2.codeRole = "RLS2"
    role2.nameRole = "Non-Admin"
    role2.isActive = true
    this.listRole.push(role2)
  }

  clickCreate(){
    this.router.navigateByUrl('/roles-action/new')
  }

  clickDetail(){
    this.router.navigateByUrl('/role-permissions')
  }

  clickUpdate(){
    this.router.navigateByUrl('/roles-action/:id')
  }

  clickDelete(){
    this.router.navigateByUrl('/roles-list')
  }

  clickBack(){
    this.router.navigateByUrl('/dashboard')
  }

}

class Role {
  number?: number
  codeRole?: string
  nameRole?: string
  isActive?: boolean
}
