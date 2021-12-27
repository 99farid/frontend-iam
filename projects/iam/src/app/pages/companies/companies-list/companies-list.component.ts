import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FindAllResCompaniesDto } from 'projects/core/src/app/dto/companies/find-all-res-companies-dto';
import { Companies } from 'projects/core/src/app/model/companies';
import { AuthenticationService } from 'projects/core/src/app/services/authentication/authentication.service';
import { CompaniesService } from 'projects/core/src/app/services/companies/companies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit, OnDestroy {
  
  allDataCompanies?: FindAllResCompaniesDto

  private obs?: Subscription

  listCompany: Companies[] = []

  constructor(private router: Router, private companiesService: CompaniesService,
     private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.allDataCompanies = new FindAllResCompaniesDto()
    this.companiesService.findAllCompanies().subscribe(result => {
      this.allDataCompanies = result
      this.listCompany = this.allDataCompanies.data
    })
  }

  clickCreate(){
    this.router.navigateByUrl('/companies-action/new')
  }

  clickUpdate(){
    this.router.navigateByUrl('/companies-action/:id')
  }

  clickDelete(){
    this.router.navigateByUrl('/companies-list')
  }

  clickBack(){
    this.router.navigateByUrl('/dashboard')
  }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }

}
