import { Component, OnInit } from '@angular/core';
import { ConditionAssets } from 'projects/core/src/app/model/condition-assets';
import { ConditionAssetsService } from 'projects/core/src/app/services/condition-assets/condition-assets.service';

@Component({
  selector: 'app-transactions-in-detail-action',
  templateUrl: './transactions-in-detail-action.component.html',
  styleUrls: ['./transactions-in-detail-action.component.css']
})
export class TransactionsInDetailActionComponent implements OnInit {
  listCondition : ConditionAssets[] = []
  constructor(private conditionService : ConditionAssetsService) { }

  ngOnInit(): void {
    this.conditionService.findAll().subscribe(
      result =>{
        this.listCondition = result.data
      }
    )
  }

}
