import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companies-action',
  templateUrl: './companies-action.component.html',
  styleUrls: ['./companies-action.component.css']
})
export class CompaniesActionComponent implements OnInit {

  listCompany: Company[] = []

  constructor(private router: Router) { }

  ngOnInit(): void {
    const company1 = new Company()
    company1.number = 1
    company1.code = "CR1"
    company1.companyName = "Create"
    company1.isActive = true
    this.listCompany.push(company1)

    const company2 = new Company()
    company2.number = 2
    company2.code = "UP1"
    company2.companyName = "Update"
    company2.isActive = true
    this.listCompany.push(company2)

    const company3 = new Company()
    company3.number = 3
    company3.code = "DL1"
    company3.companyName = "Delete"
    company3.isActive = true
    this.listCompany.push(company3)
  }

  clickSubmit(){
    this.router.navigateByUrl('/companies-list')
  }

  clickBack(){
    this.router.navigateByUrl('/dashboard')
  }

}

class Company {
  number?: number
  code?: string
  companyName?: string
  isActive?: boolean
}
