import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng-select2';
import { DataFormat, Options } from 'select2';
import { FindAllFilterBySearchResCompaniesDto } from 'projects/core/src/app/dto/companies/find-all-filter-by-search-res-companies-dto';
import { FindAllFilterBySearchResItemTypesDto } from 'projects/core/src/app/dto/item-types/find-all-filter-by-search-res-item-types-dto';
import { FindAllFilterBySearchResInvoicesDto } from 'projects/core/src/app/dto/invoices/find-all-filter-by-search-res-invoices-dto';
import { FindAllFilterBySearchResStatusAssetsDto } from 'projects/core/src/app/dto/status-assets/find-all-filter-by-search-res-status-assets-dto';
import { InsertReqAssetDto } from 'projects/core/src/app/dto/assets/insert-req-assets-dto';
import { AssetsService } from 'projects/core/src/app/services/assets/assets.service';
import { InsertReqItemsDto } from 'projects/core/src/app/dto/assets/insert-req-items-dto';
import { InsertReqInvoicesDto } from 'projects/core/src/app/dto/assets/insert-req-invoices-dto';
import { AuthenticationService } from 'projects/core/src/app/services/authentication/authentication.service';
import { StatusAssets } from 'projects/core/src/app/model/status-assets';
import { StatusAssetsService } from 'projects/core/src/app/services/status-assets/status-assets.service';
import { FindAllForNewAssetResStatusAssetsDto } from 'projects/core/src/app/dto/status-assets/find-all-for-new-asset-res-status-assets-dto';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemTypesService } from 'projects/core/src/app/services/item-types/item-types.service';
import { FindByIdResItemTypesDto } from 'projects/core/src/app/dto/item-types/find-by-id-res-item-types-dto';
import { ItemTypesCode } from 'projects/core/src/app/constant/item-types-code';
import { Assets } from 'projects/core/src/app/model/assets';
import { FindAllResStatusAssetsDto } from 'projects/core/src/app/dto/status-assets/find-all-res-status-assets-dto';
import { Companies } from 'projects/core/src/app/model/companies';
import { CompaniesService } from 'projects/core/src/app/services/companies/companies.service';

@Component({
  selector: 'app-assets-action',
  templateUrl: './assets-action.component.html',
  styleUrls: ['./assets-action.component.css']
})
export class AssetsActionComponent implements OnInit {
  asset: Assets = new Assets();
  optionsCompany!: Options;
  optionsType!: Options
  optionsInvoice!: Options
  statusList: StatusAssets[] = []
  insertAsset: InsertReqAssetDto = new InsertReqAssetDto();
  insertItem: InsertReqItemsDto = new InsertReqItemsDto();
  insertInvoice: InsertReqInvoicesDto = new InsertReqInvoicesDto()
  formData: FormData = new FormData();
  formDataUpload: FormData = new FormData();
  isCreateInvoice: boolean = false
  isLicense: boolean = false
  fileInvoicePict!: File | null
  fileDisplay!: File | null
  fileExcel!: File | null
  selectedInvoiePict!: FileList
  selectedDisplay!: FileList
  selectedExcel!: FileList
  isUpdate: boolean = false
  companyCode : string =""
  typeCode : string = ""
  tailCode : string = ""

  constructor(private assetService: AssetsService, private authService: AuthenticationService,
    private statusService: StatusAssetsService, private router: Router,
    private typeService: ItemTypesService, private activatedRoute: ActivatedRoute,
    private companyService : CompaniesService) { }

  ngOnInit(): void {
    
    this.insertAsset.item = this.insertItem;
    this.insertAsset.invoice = this.insertInvoice;
    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      this.assetService.findById(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(
        result => {

          this.asset = result.data          
          this.isUpdate = !this.isUpdate
          this.statusService.findAll().subscribe(
            result => {
              const dataResult: FindAllResStatusAssetsDto = result
              this.statusList = dataResult.data
            }
          )
        }
      )
    } else {
      this.statusService.findAllForNewAsset().subscribe(
        result => {
          const dataResult: FindAllForNewAssetResStatusAssetsDto = result
          this.statusList = dataResult.data
        }
      )
    }


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

    this.optionsType = {
      width: '100%',
      ajax: {
        headers: { Authorization: `Bearer ${this.authService.getToken()}` },
        url: 'http://localhost:8080/item-types/search/',
        data: function (params) {
          var query = {
            query: params.term,
          }
          return query;
        },
        processResults: function (data) {
          const result: FindAllFilterBySearchResItemTypesDto = data;
          const select2Data: Select2OptionData[] = []
          for (const types of result.data) {
            select2Data.push(
              {
                id: types.id,
                text: types.itemTypeName
              }
            )
          }
          return {
            results: select2Data
          };
        }

      }
    }

    this.optionsInvoice = {
      width: '100%',
      ajax: {
        headers: { Authorization: `Bearer ${this.authService.getToken()}` },
        url: 'http://localhost:8080/invoices/search/',
        data: function (params) {
          var query = {
            query: params.term,
          }
          return query;
        },
        processResults: function (data) {
          const result: FindAllFilterBySearchResInvoicesDto = data;
          const select2Data: Select2OptionData[] = []
          for (const invoice of result.data) {
            select2Data.push(
              {
                id: invoice.id,
                text: invoice.code
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
  onClick(): void {
    if (this.asset.id) {
      this.assetService.update(this.asset, this.fileDisplay).subscribe(
        result => {

        }
      )
    } else {
      this.assetService.insert(this.insertAsset, this.fileDisplay, this.fileInvoicePict).subscribe({
        next: result => {
          this.router.navigateByUrl('/assets-in')
        }
      })
    }
  }
  
  createInvoice(): void {
    this.isCreateInvoice = !this.isCreateInvoice
  }

  inputInvoicePict(event: any): void {
    this.selectedInvoiePict = event.target.files
    if (this.selectedInvoiePict) {
      this.fileInvoicePict = this.selectedInvoiePict.item(0)
    }
  }
  inputDisplay(event: any): void {
    this.selectedDisplay = event.target.files
    if (this.selectedDisplay) {
      this.fileDisplay = this.selectedDisplay.item(0)
    }
  }

  inputFile(event: any): void {
    this.selectedExcel = event.target.files
    this.fileExcel = this.selectedExcel.item(0)
    if (this.fileExcel)
      this.formDataUpload.append('data', this.fileExcel)

  }

  uploadFile(): void {
    this.assetService.insertExcel(this.formDataUpload).subscribe({
      next: result => {
        this.router.navigateByUrl('/assets-in')
      }
    })
  }
  changeType(event: any): void {
    console.log(event)
    this.typeService.findById(event).subscribe(
      result => {
        const dataResult: FindByIdResItemTypesDto = result
        this.typeCode = result.data.code
        this.insertAsset.code = this.companyCode + "-"+this.typeCode+ "-"+this.tailCode
        if (dataResult.data.code == ItemTypesCode.LICENSE) {
          this.isLicense = true
        } else {
          this.isLicense = false
        }
      }
    )

  }
  statusChange(event : any) : void{
    console.log(event)
    this.asset.statusAsset = new StatusAssets()
    this.asset.statusAsset.id = event
  }

  companyChange(event : any) : void{
    console.log(event)
    this.companyService.findByIdCompanies(event).subscribe(
      result=>{
        this.companyCode = result.data.code
        this.insertAsset.code = this.companyCode + "-"+this.typeCode+ "-"+this.tailCode
      }
    )
    this.asset.company = new Companies()
    this.asset.company.id = event
  }
  tailCodeChaged(event : any) : void {
    this.tailCode = event.target.value
    this.insertAsset.code = this.companyCode + "-"+this.typeCode+ "-"+this.tailCode
  }
  downloadTemplate() : void{
    this.assetService.downloadTemplate().subscribe(result=>{})
  }

}
