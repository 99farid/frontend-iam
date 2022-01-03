import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { Select2OptionData } from 'ng-select2';
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
import { Locations } from 'projects/core/src/app/model/locations';
import { TransactionsOut } from 'projects/core/src/app/model/transactions-out';
import { AssetsService } from 'projects/core/src/app/services/assets/assets.service';
import { AuthenticationService } from 'projects/core/src/app/services/authentication/authentication.service';
import { DetailTransactionsOutService } from 'projects/core/src/app/services/detail-transactions-out/detail-transactions-out.service';
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
  listTrxOutDetail: DetailTransactionsOut[] = []

  // transactionsOut: TransactionsOut = new TransactionsOut()
  listEmployee: Employees[] = []
  listLocation: Locations[] = []
  listGeneralItem: Assets[] = []
  listEmployeeCo: EmployeeCo[] = []
  listAsset: Assets[] = []
  listAssetCo: AssetCo[] = []

  idHeader: string = String(this.activatedRoute.snapshot.paramMap.get('id'))

  optionsLocation!: Options;
  optionsAsset!: Options;
  optionsGeneralItem!: Options;
  optionsComponent!: Options;

  employee: Employees = new Employees()

  nip: string = ""

  employeeSelect?: string
  locationSelect?: string
  generalItemSelect?: string
  assetSelect!: string

  isDisabled: boolean = false

  isNip: boolean = false
  isFind: boolean = false
  isLocation: boolean = false
  isGeneralItem: boolean = false
  isComponent: boolean = false
  isAsset: boolean = false

  valueSelect: string = ''

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
      this.employeeSelect = event.target.options[event.target.selectedIndex].text

    } else if (this.valueSelect == 'loc') {
      this.isNip = false
      this.isGeneralItem = false
      this.isLocation = true
      this.isComponent = false
      this.isAsset = true
      this.isFind = false
      this.locationSelect = event.target.options[event.target.selectedIndex].text

    } else if (this.valueSelect == 'genitm') {
      this.isNip = false
      this.isGeneralItem = true
      this.isLocation = false
      this.isComponent = true
      this.isAsset = false
      this.isFind = false
      this.generalItemSelect = event.target.options[event.target.selectedIndex].text
    }
  }

  onGeneralItemSelect(event: any) {
    this.assetSelect = event.target.options[event.target.options.selectedIndex].text
  }

  onComponentSelect(event: any) {
    this.assetSelect = event.target.options[event.target.options.selectedIndex].text
  }

  onAssetSelect(event: any) {
    this.assetSelect = event.target.options[event.target.options.selectedIndex].text
  }

  clickFind(): void {
    this.employeesService.findByNip(this.nip).subscribe(
      {
        next: result => {
          const findNip: FindByResNipDto = result
          this.employee = result.data
          this.dataInsert.idEmployee = this.employee.fullName

        },
        error: err => {
          this.employee.email = "-"
        }
      })
  }

  clickAdd() {
    if (this.employeeSelect && this.locationSelect == null && this.generalItemSelect == null) {
      if (this.assetSelect) {
        let isDup: boolean = false
        for (const data of this.listAssetCo) {
          if (this.assetSelect == data.assetName) {
            isDup = true
          }
        }
        if (!isDup) {
          const assetCo: AssetCo = new AssetCo()
          assetCo.assetName = this.assetSelect
          this.listAssetCo.push(assetCo)
  
          const detailInsert: InsertReqDataDetailTransactionsOutDto = { ...this.dataDetailInsert }
          this.dataInsert.dataDetail.push(detailInsert)
        }
      }
    } else if (this.employeeSelect == null && this.locationSelect && this.generalItemSelect == null) {
      if (this.assetSelect) {
        let isDup: boolean = false
        for (const data of this.listAssetCo) {
          if (this.assetSelect == data.assetName) {
            isDup = true
          }
        }
        if (!isDup) {
          const assetCo: AssetCo = new AssetCo()
          assetCo.assetName = this.assetSelect
          this.listAssetCo.push(assetCo)
  
          const detailInsert: InsertReqDataDetailTransactionsOutDto = { ...this.dataDetailInsert }
          this.dataInsert.dataDetail.push(detailInsert)
        }
      }
    } else if (this.employeeSelect == null && this.locationSelect == null && this.generalItemSelect) {
      if (this.assetSelect) {
        let isDup: boolean = false
        for (const data of this.listAssetCo) {
          if (this.assetSelect == data.assetName) {
            isDup = true
          }
        }
        if (!isDup) {
          const assetCo: AssetCo = new AssetCo()
          assetCo.assetName = this.assetSelect
          this.listAssetCo.push(assetCo)
  
          const detailInsert: InsertReqDataDetailTransactionsOutDto = { ...this.dataDetailInsert }
          this.dataInsert.dataDetail.push(detailInsert)
        }
      }
    }
    this.router.navigateByUrl('/transactions-out-action/new')
  }

  clickDelete() {
    this.router.navigateByUrl('/transactions-out-action/new')
  }

  clickBack() {
    this.router.navigateByUrl('/dashboard')
  }

  clickSubmit() {
    const dataTrxOut: InsertReqDataTransactionsOutDto = new InsertReqDataTransactionsOutDto()
    // dataTrxOut.idEmployee 
    // dataTrxOut.idLocation
    // dataTrxOut.idGeneralItem
    dataTrxOut.isActive = true


    this.transactionsOutService.insert(this.dataInsert).subscribe({
      next: result => {
        this.router.navigateByUrl('/transactions-out-list')
      }
    })
  }
}


class AssetCo {
  assetName!: string
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

