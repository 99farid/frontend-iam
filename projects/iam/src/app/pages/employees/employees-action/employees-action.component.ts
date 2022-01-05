import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select2OptionData } from 'ng-select2';
import { FindAllFilterBySearchResCompaniesDto } from 'projects/core/src/app/dto/companies/find-all-filter-by-search-res-companies-dto';
import { FindByIdResEmployeesDto } from 'projects/core/src/app/dto/employees/find-by-id-res-employees-dto';
import { Companies } from 'projects/core/src/app/model/companies';
import { Employees } from 'projects/core/src/app/model/employees';
import { AuthenticationService } from 'projects/core/src/app/services/authentication/authentication.service';
import { EmployeesService } from 'projects/core/src/app/services/employees/employees.service';
import { Options } from 'select2';

@Component({
  selector: 'app-employees-action',
  templateUrl: './employees-action.component.html',
  styleUrls: ['./employees-action.component.css']
})
export class EmployeesActionComponent implements OnInit {

  optionsCompany!: Options;

  dataInsert: Employees = new Employees()

  dataUpdate: Employees = new Employees()

  companyInsert: Companies = new Companies()

  isDisabled: boolean = false

  selectedExcel!:FileList 

  fileExcel! : File | null

  formDataUpload : FormData = new FormData()

  constructor(private authService: AuthenticationService,
    private activatedRoute: ActivatedRoute, private router: Router,
    private employeesService: EmployeesService) { }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      this.employeesService.findByIdEmployees(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(
        result => {
          const companiesResult: FindByIdResEmployeesDto = result
          this.dataUpdate = companiesResult.data
          this.isDisabled = true

          this.dataInsert.id = this.dataUpdate.id
          this.dataInsert.nip = this.dataUpdate.nip
          this.dataInsert.version = this.dataUpdate.version
          this.dataInsert.createdBy = this.dataUpdate.createdBy
          this.dataInsert.createdDate = this.dataUpdate.createdDate
        })

      
    }
    this.dataInsert.company = this.companyInsert
    this.optionsCompany = {
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

  clickSubmit() {
    if (this.dataInsert.id) {
      this.employeesService.update(this.dataInsert).subscribe({
        next: result => {
          this.router.navigateByUrl('/employees')
        }
      })
    } else {
      this.employeesService.insert(this.dataInsert).subscribe({
        next: result => {
          this.router.navigateByUrl('/employees')
        }
      })
    }
  }

  clickBack() {
    this.router.navigateByUrl('/dashboard')
  }
  uploadFile() {
    this.employeesService.insertExcel(this.formDataUpload).subscribe({
      next: result => {
        this.router.navigateByUrl('/employees-in-list')
      }
    })
  }

  inputFile(event : any){
    this.selectedExcel = event.target.files
    this.fileExcel = this.selectedExcel.item(0)
    if (this.fileExcel)
      this.formDataUpload.append('data', this.fileExcel)
  }

}
