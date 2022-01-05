import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select2OptionData } from 'ng-select2';
import { InsertResDto } from 'projects/core/src/app/dto/all-dto-global/insert-res-dto';
import { FindAllFilterBySearchResAssetsDto } from 'projects/core/src/app/dto/assets/find-all-filter-by-search-res-assets-dto';
import { FindAllFilterBySearchResComponentDto } from 'projects/core/src/app/dto/assets/find-all-filter-by-search-res-component-dto';
import { FindAllFilterBySearchResGeneralItemDto } from 'projects/core/src/app/dto/assets/find-all-filter-by-search-res-general-item-dto';
import { FindByResNipDto } from 'projects/core/src/app/dto/employees/find-by-res-nip-dto';
import { FindAllFilterBySearchResLocationsDto } from 'projects/core/src/app/dto/locations/find-all-filter-by-search-res-locations-dto';
import { InsertReqDataDetailTransactionsOutDto } from 'projects/core/src/app/dto/transactions-out/insert-req-data-detail-transactions-out-dto';
import { InsertReqDataTransactionsOutDto } from 'projects/core/src/app/dto/transactions-out/insert-req-data-transactions-out-dto';
import { Assets } from 'projects/core/src/app/model/assets';
import { DetailTransactionsOut } from 'projects/core/src/app/model/detail-transactions-out';
import { Employees } from 'projects/core/src/app/model/employees';
import { Files } from 'projects/core/src/app/model/files';
import { Locations } from 'projects/core/src/app/model/locations';
import { TransactionsOut } from 'projects/core/src/app/model/transactions-out';
import { AssetsService } from 'projects/core/src/app/services/assets/assets.service';
import { AuthenticationService } from 'projects/core/src/app/services/authentication/authentication.service';
import { DetailTransactionsOutService } from 'projects/core/src/app/services/detail-transactions-out/detail-transactions-out.service';
import { EmployeesService } from 'projects/core/src/app/services/employees/employees.service';
import { LocationsService } from 'projects/core/src/app/services/locations/locations.service';
import { TransactionsOutService } from 'projects/core/src/app/services/transactions-out/transactions-out.service';
import { Subscription } from 'rxjs';
import { Options } from 'select2';

@Component({
  selector: 'app-transactions-out-action',
  templateUrl: './transactions-out-action.component.html',
  styleUrls: ['./transactions-out-action.component.css']
})
export class TransactionsOutActionComponent implements OnInit {

  dataInsert: InsertReqDataTransactionsOutDto = new InsertReqDataTransactionsOutDto()
  dataDetailInsert: InsertReqDataDetailTransactionsOutDto = new InsertReqDataDetailTransactionsOutDto()
  listTrxOutDetail: DetailTransactionsOut[] = []

  insertDto?: InsertResDto
  // transactionsOut: TransactionsOut = new TransactionsOut()
  listEmployee: Employees[] = []
  listLocation: Locations[] = []
  listGeneralItem: Assets[] = []
  listEmployeeCo: EmployeeCo[] = []
  // listAsset: Assets[] = []
  listAssetCo: AssetCo[] = []

  idHeader: string = String(this.activatedRoute.snapshot.paramMap.get('id'))

  private obs?: Subscription

  optionsLocation!: Options;
  optionsAsset!: Options;
  optionsGeneralItem!: Options;
  optionsComponent!: Options;

  employee: Employees = new Employees()
  location: Locations = new Locations()
  generalItem: Assets = new Assets()

  nip: string = ""

  employeeSelect?: string
  locationSelect?: string
  generalItemSelect?: string

  generalSelect!: string
  codeSelect!: string
  assetSelect!: string
  companySelect!: string
  displaySelect?: string
  statusSelect!: string
  dueDate: string = ''

  isDisabled: boolean = false

  isNip: boolean = false
  isFind: boolean = false
  isLocation: boolean = false
  isGeneralItem: boolean = false
  isComponent: boolean = false
  isAsset: boolean = false

  employeeCondition : boolean = true
  locationCondition : boolean = true
  generalItemCondition : boolean = true

  valueSelect: string = ''
  receiver: string = ''

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private authService: AuthenticationService, private transactionsOutService: TransactionsOutService,
    private detailTransOutService: DetailTransactionsOutService, private employeesService: EmployeesService,
    private assetsService: AssetsService, private locationsService: LocationsService) { }

  ngOnInit(): void {
    this.dataInsert.dataDetail = []

    this.detailTransOutService.findByIdHeader(this.idHeader).subscribe(
      result => {
        this.listTrxOutDetail = result.data
      })

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

  onAssignSelect(event: any) {
    console.log(this.valueSelect);
    if (this.valueSelect == 'emp') {
      this.isNip = true
      this.isGeneralItem = false
      this.isLocation = false
      this.isComponent = false
      this.isAsset = true
      this.isFind = true
      this.dataInsert.idGeneralItem = undefined
      this.dataInsert.idLocation = undefined
    } else if (this.valueSelect == 'loc') {
      this.isNip = false
      this.isGeneralItem = false
      this.isLocation = true
      this.isComponent = false
      this.isAsset = true
      this.isFind = false
      this.dataInsert.idGeneralItem = undefined
      this.dataInsert.idEmployee = undefined
    } else if (this.valueSelect == 'genitm') {
      this.isNip = false
      this.isGeneralItem = true
      this.isLocation = false
      this.isComponent = true
      this.isAsset = false
      this.isFind = false
      this.dataInsert.idEmployee = undefined
      this.dataInsert.idLocation = undefined
    }
  }

  onGeneralItemSelect(event: any) {
    this.generalSelect = event.target.options[event.target.options.selectedIndex].text
  }

  onComponentSelect(event: any) {
    this.assetsService.findById(event).subscribe(
      result => {
        this.codeSelect = result.data.code
        this.assetSelect = result.data.item.description
        this.companySelect = result.data.company.companyName
        this.displaySelect = result.data.display.dataFile
        this.statusSelect = result.data.statusAsset.statusAssetName
      })
  }

  onAssetSelect(event: any) {
    console.log(event)
    this.assetsService.findById(event).subscribe(
      result => {
        console.log(result)
        this.statusSelect = result.data.statusAsset.statusAssetName
        this.codeSelect = result.data.code
        this.assetSelect = result.data.item.description
        this.companySelect = result.data.company.companyName
        this.displaySelect = result.data.display?.dataFile
      })
  }

  clickFind(): void {
    this.employeesService.findByNip(this.nip).subscribe(
      {
        next: result => {
          const findNip: FindByResNipDto = result
          this.employee = result.data
          this.receiver = this.employee.fullName
          this.dataInsert.idEmployee = this.employee.id
        },
        error: err => {
          this.employee.fullName = "-"
        }
      })
  }

  locationChange(event: any): void {
    this.locationsService.findById(event).subscribe(
      result => {
        this.receiver = result.data.locationName
        this.dataInsert.idLocation = result.data.id
      })
  }

  generalItemChange(event: any): void {
    this.assetsService.findById(event).subscribe(
      result => {
        this.receiver = result.data.item.description
        this.dataInsert.idGeneralItem = result.data.id
      })
  }

  dueDateChange(event: any): void {
    this.dueDate = event.target.value
  }

  isDisplayAvail(data: Files): boolean {
    if (data) {
      return true;
    }
    return false
  }

  clickAdd() {
    if (this.valueSelect == 'emp') {
      this.locationCondition = false
      this.generalItemCondition = false
    } else if (this.valueSelect == 'loc') {
      this.employeeCondition = false
      this.generalItemCondition = false
    } else if (this.valueSelect == 'genitm') {
      this.employeeCondition = false
      this.locationCondition = false
    }

    if (this.codeSelect) {
      let isDup: boolean = false
      for (const data of this.listAssetCo) {
        if (this.codeSelect  == data.assetCode) {
          isDup = true
        }
      }
      if (!isDup) {
        const assetCo: AssetCo = new AssetCo()
        assetCo.assetCode = this.codeSelect
        assetCo.assetName = this.assetSelect
        assetCo.assetCompany = this.companySelect
        assetCo.assetDisplay = this.displaySelect
        assetCo.assetStatus = this.statusSelect
        assetCo.dueDate = this.dueDate
        console.log(this.statusSelect)
        this.listAssetCo.push(assetCo)
        

        this.dataDetailInsert.dueDate = this.dueDate
        const detailInsert: InsertReqDataDetailTransactionsOutDto = { ...this.dataDetailInsert }
        this.dataInsert.dataDetail.push(detailInsert)
      }
    }
  }

  clickDelete(index: number): void {
    this.dataInsert.dataDetail = this.dataInsert.dataDetail.filter(result =>  this.dataInsert.dataDetail[index].idAsset != result.idAsset)
    this.listAssetCo = this.listAssetCo.filter(result => this.listAssetCo[index].assetCode != result.assetCode)
    
  }

  clickBack(): void {
    this.router.navigateByUrl('/dashboard')
  }

  clickSubmit(): void {
    this.obs = this.transactionsOutService.insert(this.dataInsert).subscribe({
      next: result => {
        this.router.navigateByUrl('/transactions-out-list')
       }
        
      })
  }
}


class AssetCo {
  assetCode?: string
  assetName?: string
  assetCompany?: string
  assetDisplay?: string
  assetStatus?: string
  dueDate?: string
  isActive?: boolean
}

class EmployeeCo {
  fullName!: string
}

class LocationsCo {
  locationName!: string
}

class GeneralItemCo {
  description!: string
}

