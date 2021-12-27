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

@Component({
  selector: 'app-assets-action',
  templateUrl: './assets-action.component.html',
  styleUrls: ['./assets-action.component.css']
})
export class AssetsActionComponent implements OnInit {

  optionsCompany!: Options;
  optionsType!: Options
  optionsInvoice!: Options
  optionsStatus!: Options
  insertAsset: InsertReqAssetDto = new InsertReqAssetDto();
  insertItem: InsertReqItemsDto = new InsertReqItemsDto();
  insertInvoice: InsertReqInvoicesDto = new InsertReqInvoicesDto()
  formData : FormData = new FormData();

  constructor(private assetService: AssetsService, private authService: AuthenticationService) { }

  ngOnInit(): void {

    this.insertAsset.item = this.insertItem;
    this.insertAsset.invoice = this.insertInvoice;
    this.formData.append('data', JSON.stringify(this.insertAsset))

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
    this.optionsStatus = {
      width: '100%',
      ajax: {
        headers: { Authorization: `Bearer ${this.authService.getToken()}` },
        url: 'http://localhost:8080/status-assets/search/',
        data: function (params) {
          var query = {
            query: params.term,
          }
          return query;
        },
        processResults: function (data) {
          const result: FindAllFilterBySearchResStatusAssetsDto = data;
          const select2Data: Select2OptionData[] = []
          for (const status of result.data) {
            select2Data.push(
              {
                id: status.id,
                text: status.statusAssetName
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
    this.assetService.insert(this.formData).subscribe({
      next: result => {

      }
    })
  }


}
