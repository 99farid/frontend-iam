import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit, OnDestroy {

  listEmployees: Employees[] = []

  private obs?: Subscription

  constructor(private router: Router) { }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }

  ngOnInit(): void {
    const employees1 = new Employees()
    employees1.number = 1
    employees1.company = "Lawencon"
    employees1.nip = "123456789"
    employees1.fullName = "Tommy Hailer"
    employees1.email = "superadmin@gmail.com"
    employees1.phoneNo = "08123463435"
    employees1.department = "Accounting"
    employees1.isActive = true
    this.listEmployees.push(employees1)

    const employees2 = new Employees()
    employees2.number = 2
    employees2.company = "Linov"
    employees2.nip = "123456789"
    employees2.fullName = "Jhonanendra Nugraha"
    employees2.email = "jhonnugraha@gmail.com"
    employees2.phoneNo = "08123463425"
    employees2.department = "Human Resource"
    employees2.isActive = true
    this.listEmployees.push(employees2)

    const employees3 = new Employees()
    employees3.number = 3
    employees3.company = "Lawencon"
    employees3.nip = "123456789"
    employees3.fullName = "Desak Ayu Putu"
    employees3.email = "desakayuputu5@gmail.com"
    employees3.phoneNo = "08122463435"
    employees3.department = "Programming"
    employees3.isActive = true
    this.listEmployees.push(employees3)
  }

  clickCreate(){
    this.router.navigateByUrl('/employees-action/new')
  }

  clickUpdate(){
    this.router.navigateByUrl('/employees-action/:id')
  }

  clickDelete(){
    this.router.navigateByUrl('/employees-list')
  }

  clickBack(){
    this.router.navigateByUrl('/dashboard')
  }

}

class Employees {
  number?: number
  company?: string
  nip?: string
  fullName?: string
  email?: string
  phoneNo?: string
  department?: string
  isActive?: boolean
}

