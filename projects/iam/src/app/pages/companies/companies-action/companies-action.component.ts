import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InsertResDto } from 'projects/core/src/app/dto/all-dto-global/insert-res-dto';
import { UpdateResDto } from 'projects/core/src/app/dto/all-dto-global/update-res-dto';
import { FindByIdResCompaniesDto } from 'projects/core/src/app/dto/companies/find-by-id-res-companies-dto';
import { Companies } from 'projects/core/src/app/model/companies';
import { AuthenticationService } from 'projects/core/src/app/services/authentication/authentication.service';
import { CompaniesService } from 'projects/core/src/app/services/companies/companies.service';

@Component({
  selector: 'app-companies-action',
  templateUrl: './companies-action.component.html',
  styleUrls: ['./companies-action.component.css']
})
export class CompaniesActionComponent implements OnInit {

  dataInsert: Companies = new Companies()

  dataUpdate: Companies = new Companies()

  isDisabled: boolean = false

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private companiesService: CompaniesService) { }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      this.companiesService.findByIdCompanies(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(
        result => {
          const companiesResult: FindByIdResCompaniesDto = result
          this.dataUpdate = companiesResult.data
          this.isDisabled = true

          this.dataInsert.id = this.dataUpdate.id
          this.dataInsert.code = this.dataUpdate.code
          this.dataInsert.version = this.dataUpdate.version
          this.dataInsert.createdBy = this.dataUpdate.createdBy
          this.dataInsert.createdDate = this.dataUpdate.createdDate
        })
    }
  }

  clickSubmit() {
    if (this.dataInsert.id) {
      this.companiesService.update(this.dataInsert).subscribe({
        next: result => {
          this.router.navigateByUrl('/companies-list')
        }
      })
    } else {
      this.companiesService.insert(this.dataInsert).subscribe({
        next: result => {
          this.router.navigateByUrl('/companies-list')
        }
      })
    }
  }

  clickBack() {
    this.router.navigateByUrl('/dashboard')
  }

}
