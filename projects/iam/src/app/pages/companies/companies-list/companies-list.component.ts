import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { FindAllResCompaniesDto } from 'projects/core/src/app/dto/companies/find-all-res-companies-dto';
import { Companies } from 'projects/core/src/app/model/companies';
import { AuthenticationService } from 'projects/core/src/app/services/authentication/authentication.service';
import { CompaniesService } from 'projects/core/src/app/services/companies/companies.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css'],
  providers: [ConfirmationService]
})
export class CompaniesListComponent implements OnInit, OnDestroy {

  allDataCompanies?: FindAllResCompaniesDto

  private obs?: Subscription

  listCompany: Companies[] = []

  constructor(private router: Router, private companiesService: CompaniesService,
    private confirmationService: ConfirmationService, private titLeService: Title) {
    titLeService.setTitle('Company')
  }

  ngOnInit(): void {
    this.initData()
  }

  initData(): void {
    this.allDataCompanies = new FindAllResCompaniesDto()
    this.companiesService.findAllCompanies().subscribe(result => {
      this.allDataCompanies = result
      this.listCompany = this.allDataCompanies.data
    })
  }

  clickCreate(): void {
    this.router.navigateByUrl('/companies/new')
  }

  clickUpdate(id: string): void {
    this.router.navigateByUrl(`/companies/modify/${id}`)
  }

  confirm(id: string): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to Remove?',
      accept: () => {
        this.companiesService.delete(id).subscribe({
          next: result => {
            this.initData()
          }
        })
      }
    });
  }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }
}