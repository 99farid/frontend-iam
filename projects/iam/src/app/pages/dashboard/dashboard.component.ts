import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { StatusCode } from 'projects/core/src/app/constant/status-code';
import { CountAssetByStatusResAssetsDto } from 'projects/core/src/app/dto/assets/count-asset-by-status-res-assets-dto';
import { GetItemResTotalPriceDto } from 'projects/core/src/app/dto/items/get-item-res-total-price-dto';
import { AssetsService } from 'projects/core/src/app/services/assets/assets.service';
import { AuthenticationService } from 'projects/core/src/app/services/authentication/authentication.service';
import { ItemsService } from 'projects/core/src/app/services/items/items.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [CurrencyPipe]
})
export class DashboardComponent implements OnInit {

  totalItem!: number
  countAsset!: number
  deployableAsset!: number
  undeployableAsset!: number
  onAssignAsset!: number

  private obs?: Subscription

  constructor(private router: Router, private itemsService: ItemsService, 
    private assetsService: AssetsService, private titLeService: Title) {
    titLeService.setTitle('Dashboard')
  }

  ngOnInit(): void {
    this.itemsService.getTotalPrice().subscribe({
      next: result => {
        let itemsResult: GetItemResTotalPriceDto = result
        this.totalItem = itemsResult.data
      }
    })

    this.assetsService.countAsset().subscribe({
      next: result => {
        let countAssetResult: CountAssetByStatusResAssetsDto = result
        this.countAsset = countAssetResult.data
      }
    })

    this.assetsService.countAssetByStatus(StatusCode.DEPLOYABLE).subscribe({
      next: result => {
        let countByAssetResult: CountAssetByStatusResAssetsDto = result
        this.deployableAsset = countByAssetResult.data
      }
    })

    this.assetsService.countAssetByStatus(StatusCode.ONASSIGN).subscribe({
      next: result => {
        let countByAssetResult: CountAssetByStatusResAssetsDto = result
        this.onAssignAsset = countByAssetResult.data
      }
    })

    this.assetsService.countAssetByStatus(StatusCode.UNDEPLOYABLE).subscribe({
      next: result => {
        let countByAssetResult: CountAssetByStatusResAssetsDto = result
        this.undeployableAsset = countByAssetResult.data
      }
    })


  }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }
}