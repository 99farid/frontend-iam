import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles-action',
  templateUrl: './roles-action.component.html',
  styleUrls: ['./roles-action.component.css']
})
export class RolesActionComponent implements OnInit {

  listRole: Role[] = []

  constructor(private router: Router) { }

  ngOnInit(): void {
    const role1 = new Role()
    role1.number = 1
    role1.codeRole = "CR1"
    role1.nameRole = "Create"
    role1.isActive = true
    this.listRole.push(role1)

    const role2 = new Role()
    role2.number = 2
    role2.codeRole = "UP1"
    role2.nameRole = "Update"
    role2.isActive = true
    this.listRole.push(role2)

    const role3 = new Role()
    role3.number = 3
    role3.codeRole = "DL1"
    role3.nameRole = "Delete"
    role3.isActive = true
    this.listRole.push(role3)
  }

  clickCreate(){
    this.router.navigateByUrl('/roles-action/new')
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

  clickSubmit(){
    this.router.navigateByUrl('/roles-list')
  }

}

class Role {
  number?: number
  codeRole?: string
  nameRole?: string
  isActive?: boolean
}
