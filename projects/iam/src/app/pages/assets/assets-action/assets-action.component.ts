import { Component, OnInit } from '@angular/core';
import { Assets } from 'projects/core/src/app/model/assets';
import { Select2OptionData } from 'ng-select2';
import { DataFormat, Options } from 'select2';
import { Companies } from 'projects/core/src/app/model/companies';
import { FindAllFilterBySearchResCompaniesDto } from 'projects/core/src/app/dto/companies/find-all-filter-by-search-res-companies-dto';
import { FindAllFilterBySearchResItemTypesDto } from 'projects/core/src/app/dto/item-types/find-all-filter-by-search-res-item-types-dto';
import { FindAllFilterBySearchResInvoicesDto } from 'projects/core/src/app/dto/invoices/find-all-filter-by-search-res-invoices-dto';
import { FindAllFilterBySearchResStatusAssetsDto } from 'projects/core/src/app/dto/status-assets/find-all-filter-by-search-res-status-assets-dto';

@Component({
  selector: 'app-assets-action',
  templateUrl: './assets-action.component.html',
  styleUrls: ['./assets-action.component.css']
})
export class AssetsActionComponent implements OnInit {

  optionsCompany! : Options;
  optionsType! : Options
  optionsInvoice! :Options
  optionsStatus! : Options

  constructor() { }

  ngOnInit(): void {
    
    this.optionsCompany = {
      width:'100%',
      ajax: {
        
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

    this.optionsType = {
      width:'100%',
      ajax: {

        url: 'http://localhost:8080/item-types/search/',
        data: function (params) {
          var query = {
            query: params.term,
          }
          return query;
        },
        processResults: function (data) {
          const result:FindAllFilterBySearchResItemTypesDto = data;
          const select2Data : Select2OptionData[] = []
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
      width:'100%',
      ajax: {

        url: 'http://localhost:8080/invoices/search/',
        data: function (params) {
          var query = {
            query: params.term,
          }
          return query;
        },
        processResults: function (data) {
          const result:FindAllFilterBySearchResInvoicesDto = data;
          const select2Data : Select2OptionData[] = []
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
      width:'100%',
      ajax: {

        url: 'http://localhost:8080/status-assets/search/',
        data: function (params) {
          var query = {
            query: params.term,
          }
          return query;
        },
        processResults: function (data) {
          const result:FindAllFilterBySearchResStatusAssetsDto = data;
          const select2Data : Select2OptionData[] = []
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
  
  
}
