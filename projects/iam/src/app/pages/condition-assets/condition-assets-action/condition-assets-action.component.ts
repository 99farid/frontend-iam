import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Select2OptionData } from 'ng-select2';
import { FindByIdResConditionAssetsDto } from 'projects/core/src/app/dto/condition-assets/find-by-id-res-condition-assets-dto';
import { FindAllFilterBySearchResStatusAssetsDto } from 'projects/core/src/app/dto/status-assets/find-all-filter-by-search-res-status-assets-dto';
import { ConditionAssets } from 'projects/core/src/app/model/condition-assets';
import { StatusAssets } from 'projects/core/src/app/model/status-assets';
import { AuthenticationService } from 'projects/core/src/app/services/authentication/authentication.service';
import { ConditionAssetsService } from 'projects/core/src/app/services/condition-assets/condition-assets.service';
import { Options } from 'select2';

@Component({
  selector: 'app-condition-assets-action',
  templateUrl: './condition-assets-action.component.html',
  styleUrls: ['./condition-assets-action.component.css']
})
export class ConditionAssetsActionComponent implements OnInit {
  optionsStatus!: Options
  dataInsert: ConditionAssets = new ConditionAssets()
  statusInsert: StatusAssets = new StatusAssets()
  dataUpdate: ConditionAssets = new ConditionAssets()
  isDisabled: boolean = false
  constructor(private authService: AuthenticationService, private conditionService: ConditionAssetsService,
    private activatedRoute: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.paramMap.get("id")) {
      this.conditionService.findById(this.activatedRoute.snapshot.paramMap.get("id")).subscribe(
        result => {
          const conditionResult: FindByIdResConditionAssetsDto = result
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

    this.dataInsert.statusAsset = this.statusInsert

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

  submit(): void {
    if (this.dataInsert.id) {
      this.conditionService.update(this.dataInsert).subscribe({next :result=>{
        this.router.navigateByUrl('/item-types')
      }
    })
    } else {
      this.conditionService.insert(this.dataInsert).subscribe({next :result=>{
        this.router.navigateByUrl('/item-types')
      }
    })
    }
  }

}
