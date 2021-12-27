import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select2OptionData } from 'ng-select2';
import { FindAllFilterBySearchResCompaniesDto } from 'projects/core/src/app/dto/companies/find-all-filter-by-search-res-companies-dto';
import { AuthenticationService } from 'projects/core/src/app/services/authentication/authentication.service';
import { Options } from 'select2';

@Component({
  selector: 'app-employees-action',
  templateUrl: './employees-action.component.html',
  styleUrls: ['./employees-action.component.css']
})
export class EmployeesActionComponent implements OnInit {

  optionsCompany! : Options;

  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit(): void {
    
    this.optionsCompany = {
      width:'100%',
      ajax: {
        headers: {Authorization: `Bearer ${this.authService.getToken()}`},
        url: 'http://localhost:8080/companies/search/',
        data: function (params) {
          var query = {
            query: params.term,
          }
          return query;
        },
        processResults: function (data) {
          const result:FindAllFilterBySearchResCompaniesDto = data;
          const select2Data : Select2OptionData[] = []
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

  clickSubmit(){
    this.router.navigateByUrl('/employees-list')
  }

  clickBack(){
    this.router.navigateByUrl('/dashboard')
  }

}
