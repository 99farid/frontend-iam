import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select2OptionData } from 'ng-select2';
import { FindAllFilterBySearchResCompaniesDto } from 'projects/core/src/app/dto/companies/find-all-filter-by-search-res-companies-dto';
import { FindByIdResLocationsDto } from 'projects/core/src/app/dto/locations/find-by-id-res-locations-dto';
import { Companies } from 'projects/core/src/app/model/companies';
import { Locations } from 'projects/core/src/app/model/locations';
import { AuthenticationService } from 'projects/core/src/app/services/authentication/authentication.service';
import { LocationsService } from 'projects/core/src/app/services/locations/locations.service';
import { Options } from 'select2';

@Component({
  selector: 'app-locations-action',
  templateUrl: './locations-action.component.html',
  styleUrls: ['./locations-action.component.css']
})
export class LocationsActionComponent implements OnInit {
  optionCompany!: Options
  dataInsert: Locations = new Locations()
  companyInsert: Companies = new Companies()
  dataUpdate: Locations = new Locations()
  isDisabled: boolean = false
  constructor(private authService: AuthenticationService, private locationService: LocationsService,
    private activatedRoute: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.paramMap.get("id")) {
      this.locationService.findById(this.activatedRoute.snapshot.paramMap.get("id")).subscribe(
        result => {
          const conditionResult: FindByIdResLocationsDto = result
          this.dataUpdate = conditionResult.data
          this.isDisabled = true

          this.dataInsert.id = this.dataUpdate.id
          this.dataInsert.code = this.dataUpdate.code
          this.dataInsert.version = this.dataUpdate.version
          this.dataInsert.createdBy = this.dataUpdate.createdBy
          this.dataInsert.createdDate = this.dataUpdate.createdDate
          
        }
      )
    }

    this.dataInsert.company = this.companyInsert

    this.optionCompany = {
      width: '100%',
      ajax: {
        headers: { Authorization: `Bearer ${this.authService.getToken()}` },
        url: 'http://localhost:8080/companies/search/',
        data: function (params) {
          var query = {
            query: params.term,
          }
          return query;
        },
        processResults: function (data) {
          const result: FindAllFilterBySearchResCompaniesDto = data;
          const select2Data: Select2OptionData[] = []
          for (const company of result.data) {
            select2Data.push(
              {
                id: company.id,
                text: company.companyName
              }
            )
          }
          return {
            results: select2Data
          };
        }

      }
    }
  }

  submit(): void {
    if (this.dataInsert.id) {
      this.locationService.update(this.dataInsert).subscribe({next :result=>{
        this.router.navigateByUrl('/location-list')
      }
    })
    } else {
      this.locationService.insert(this.dataInsert).subscribe({next :result=>{
        this.router.navigateByUrl('/location-list')
      }
    })
    }
  }

}
