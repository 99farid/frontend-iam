import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InsertReqDetailTransactionInDto } from 'projects/core/src/app/dto/transactions-in/insert-req-detail-transaction-in-dto';
import { InsertReqTransactionInDto } from 'projects/core/src/app/dto/transactions-in/insert-req-transaction-in-dto';
import { InsertReqDataDetailTransactionsOutDto } from 'projects/core/src/app/dto/transactions-out/insert-req-data-detail-transactions-out-dto';
import { ConditionAssets } from 'projects/core/src/app/model/condition-assets';
import { DetailTransactionsIn } from 'projects/core/src/app/model/detail-transactions-in';
import { DetailTransactionsOut } from 'projects/core/src/app/model/detail-transactions-out';
import { ConditionAssetsService } from 'projects/core/src/app/services/condition-assets/condition-assets.service';
import { DetailTransactionsOutService } from 'projects/core/src/app/services/detail-transactions-out/detail-transactions-out.service';

@Component({
  selector: 'app-transactions-in-detail-action',
  templateUrl: './transactions-in-detail-action.component.html',
  styleUrls: ['./transactions-in-detail-action.component.css']
})
export class TransactionsInDetailActionComponent implements OnInit {
  listCondition: ConditionAssets[] = []
  listAssetCheckIn: AssetCheckIn[] = []
  insertTrxIn: InsertReqTransactionInDto = new InsertReqTransactionInDto();
  insertDetailTrxIn: InsertReqDetailTransactionInDto = new InsertReqDetailTransactionInDto()

  listTrxInDetail: DetailTransactionsIn[] = []
  idHeader: string = String(this.activatedRoute.snapshot.paramMap.get('id'))
  listTrxOutDetail: DetailTransactionsOut[] = []
  selectedAsset!: string
  selectedCondition!: string
  constructor(private conditionService: ConditionAssetsService, private detailTrxOutService: DetailTransactionsOutService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.insertTrxIn.detailData = []
    this.detailTrxOutService.findByIdHeader(this.idHeader).subscribe(
      result => {
        this.listTrxOutDetail = result.data
      }
    )
    this.conditionService.findAll().subscribe(
      result => {
        this.listCondition = result.data
      }
    )
  }

  clickAdd() {
    if (this.selectedAsset && this.selectedCondition) {
      let isDuplicate: boolean = false
      for (const data of this.listAssetCheckIn) {

        if (this.selectedAsset == data.assetName) {
          isDuplicate = true
        }
      }
      if (!isDuplicate) {
        const assetCheckIn: AssetCheckIn = new AssetCheckIn();
        assetCheckIn.assetName = this.selectedAsset
        assetCheckIn.conditionAsset = this.selectedCondition
        this.listAssetCheckIn.push(assetCheckIn)
        
        const insertDetail: InsertReqDetailTransactionInDto = { ...this.insertDetailTrxIn }
        this.insertTrxIn.detailData.push(insertDetail)
      }
    }

  }
  onChangeAsset(event: any) {
    this.selectedAsset = event.target.options[event.target.options.selectedIndex].text
  }

  onChangeCondition(event: any) {
    this.selectedCondition = event.target.options[event.target.options.selectedIndex].text
  }

}

class AssetCheckIn {
  assetName!: string
  conditionAsset!: string
}