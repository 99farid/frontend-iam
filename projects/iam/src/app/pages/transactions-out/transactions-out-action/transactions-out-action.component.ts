import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select2OptionData } from 'ng-select2';
import { FindAllFilterBySearchResAssetsDto } from 'projects/core/src/app/dto/assets/find-all-filter-by-search-res-assets-dto';
import { FindAllFilterBySearchResComponentDto } from 'projects/core/src/app/dto/assets/find-all-filter-by-search-res-component-dto';
import { FindAllFilterBySearchResGeneralItemDto } from 'projects/core/src/app/dto/assets/find-all-filter-by-search-res-general-item-dto';
import { FindByResNipDto } from 'projects/core/src/app/dto/employees/find-by-res-nip-dto';
import { FindAllFilterBySearchResLocationsDto } from 'projects/core/src/app/dto/locations/find-all-filter-by-search-res-locations-dto';
import { InsertReqDataDetailTransactionsOutDto } from 'projects/core/src/app/dto/transactions-out/insert-req-data-detail-transactions-out-dto';
import { InsertReqDataTransactionsOutDto } from 'projects/core/src/app/dto/transactions-out/insert-req-data-transactions-out-dto';
import { Assets } from 'projects/core/src/app/model/assets';
import { Employees } from 'projects/core/src/app/model/employees';
import { Locations } from 'projects/core/src/app/model/locations';
import { TransactionsOut } from 'projects/core/src/app/model/transactions-out';
import { AssetsService } from 'projects/core/src/app/services/assets/assets.service';
import { AuthenticationService } from 'projects/core/src/app/services/authentication/authentication.service';
import { EmployeesService } from 'projects/core/src/app/services/employees/employees.service';
import { LocationsService } from 'projects/core/src/app/services/locations/locations.service';
import { TransactionsOutService } from 'projects/core/src/app/services/transactions-out/transactions-out.service';
import { Options } from 'select2';

@Component({
  selector: 'app-transactions-out-action',
  templateUrl: './transactions-out-action.component.html',
  styleUrls: ['./transactions-out-action.component.css']
})
export class TransactionsOutActionComponent implements OnInit {

  dataInsert: InsertReqDataTransactionsOutDto = new InsertReqDataTransactionsOutDto()
  dataDetailInsert: InsertReqDataDetailTransactionsOutDto = new InsertReqDataDetailTransactionsOutDto()

  transactionsOut: TransactionsOut = new TransactionsOut()

  listEmployee: Employees[] = []
  listLocation: Locations[] = []
  listGeneralItem: Assets[] = []
  listAsset: Assets[] = []

  optionsLocation!: Options;
  optionsAsset!: Options;
  optionsGeneralItem!: Options;
  optionsComponent!: Options;

  employee: Employees = new Employees()
  nip: string = ""

  isDisabled: boolean = false

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private authService: AuthenticationService, private transactionsOutService: TransactionsOutService,
    private employeesService: EmployeesService, private assetsService: AssetsService,
    private locationsService: LocationsService) { }

  ngOnInit(): void {

    this.optionsLocation = {
      width: '100%',
      ajax: {
        headers: { Authorization: `Bearer ${this.authService.getToken()}` },
        url: 'http://localhost:8080/locations/search/',
        data: function (params) {
          var query = {
            query: params.term,
          }
          return query;
        },
        processResults: function (data) {
          const result: FindAllFilterBySearchResLocationsDto = data;
          const select2Data: Select2OptionData[] = []
          for (const locations of result.data) {
            select2Data.push(
              {
                id: locations.id,
                text: locations.locationName
              }
            )
          }
          return {
            results: select2Data
          };
        }

      }
    }

    this.optionsAsset = {
      width: '100%',
      ajax: {
        headers: { Authorization: `Bearer ${this.authService.getToken()}` },
        url: 'http://localhost:8080/assets/search/',
        data: function (params) {
          var query = {
            query: params.term,
          }
          return query;
        },
        processResults: function (data) {
          const result: FindAllFilterBySearchResAssetsDto = data;
          const select2Data: Select2OptionData[] = []
          for (const assets of result.data) {
            select2Data.push(
              {
                id: assets.id,
                text: `${assets.item.description} - ${assets.item.brand} - ${assets.code}`
              }
            )
          }
          return {
            results: select2Data
          };
        }

      }
    }

    this.optionsGeneralItem = {
      width: '100%',
      ajax: {
        headers: { Authorization: `Bearer ${this.authService.getToken()}` },
        url: 'http://localhost:8080/assets/general/',
        data: function (params) {
          var query = {
            query: params.term,
          }
          return query;
        },
        processResults: function (data) {
          const result: FindAllFilterBySearchResGeneralItemDto = data;
          const select2Data: Select2OptionData[] = []
          for (const assets of result.data) {
            select2Data.push(
              {
                id: assets.id,
                text: `${assets.item.description} - ${assets.item.brand} - ${assets.code}`
              }
            )
          }
          return {
            results: select2Data
          };
        }

      }
    }

    this.optionsComponent = {
      width: '100%',
      ajax: {
        headers: { Authorization: `Bearer ${this.authService.getToken()}` },
        url: 'http://localhost:8080/assets/component/',
        data: function (params) {
          var query = {
            query: params.term,
          }
          return query;
        },
        processResults: function (data) {
          const result: FindAllFilterBySearchResComponentDto = data;
          const select2Data: Select2OptionData[] = []
          for (const assets of result.data) {
            select2Data.push(
              {
                id: assets.id,
                text: `${assets.item.description} - ${assets.item.brand} - ${assets.item.description}`
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

  clickFind(): void {
    this.employeesService.findByNip(this.nip).subscribe(
      {
        next: result => {
          const findNip: FindByResNipDto = result
          this.employee = result.data
          this.dataInsert.idEmployee = this.employee.email

        },
        error: err => {
          this.employee.email = "-"
        }
      })
  }

  clickAdd() {
    this.router.navigateByUrl('/transactions-out-action/new')
  }

  clickDelete() {
    this.router.navigateByUrl('/transactions-out-action/new')
  }

  clickBack() {
    this.router.navigateByUrl('/dashboard')
  }

  clickSubmit() {
    this.transactionsOutService.insert(this.dataInsert).subscribe({
      next: result => {
        this.router.navigateByUrl('/transactions-out-list')
      }
    })
  }
}
