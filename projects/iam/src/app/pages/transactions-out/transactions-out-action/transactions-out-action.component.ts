import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactions-out-action',
  templateUrl: './transactions-out-action.component.html',
  styleUrls: ['./transactions-out-action.component.css']
})
export class TransactionsOutActionComponent implements OnInit {

  listRole: Role[] = []

  constructor(private router: Router) { }

  ngOnInit(): void {
const role1 = new Role()
    role1.number = 1
    role1.code = "GLP1"
    role1.display = "Laptop"
    role1.name = "Laptop"
    role1.company = "Lawencon"
    role1.status = "Deployable"
    this.listRole.push(role1)

    const role2 = new Role()
    role2.number = 2
    role2.code = "GLP2"
    role2.display = "Laptop"
    role2.name = "Laptop"
    role2.company = "Lawencon"
    role2.status = "Deployable"
    this.listRole.push(role2)

    const role3 = new Role()
    role3.number = 3
    role3.code = "GLP3"
    role3.display = "Laptop"
    role3.name = "Laptop"
    role3.company = "Lawencon"
    role3.status = "Deployable"
    this.listRole.push(role3)
  }

  clickAdd(){
    this.router.navigateByUrl('/transactions-out-action/new')
  }

  clickUpdate(){
    this.router.navigateByUrl('/transactions-out-action/:id')
  }

  clickDelete(){
    this.router.navigateByUrl('/transactions-out-list')
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
  code?: string
  display?: string
  name?: string
  company?: string
  status?: string
}

