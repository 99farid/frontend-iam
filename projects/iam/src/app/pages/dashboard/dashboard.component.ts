import { CurrencyPipe } from '@angular/common';
<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { StatusCode } from 'projects/core/src/app/constant/status-code';
=======
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxLoadingComponent } from 'ngx-loading';
import { StatusCode} from 'projects/core/src/app/constant/status-code';
>>>>>>> c9a2ce12922a3135c9b80eacf8a6b3da82ac03b3
import { CountAssetByStatusResAssetsDto } from 'projects/core/src/app/dto/assets/count-asset-by-status-res-assets-dto';
import { GetItemResTotalPriceDto } from 'projects/core/src/app/dto/items/get-item-res-total-price-dto';
import { AssetsService } from 'projects/core/src/app/services/assets/assets.service';
import { AuthenticationService } from 'projects/core/src/app/services/authentication/authentication.service';
import { ItemsService } from 'projects/core/src/app/services/items/items.service';
import { Subscription, forkJoin, takeLast } from 'rxjs';
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

  constructor(private router: Router, private authService: AuthenticationService,
    private itemsService: ItemsService, private assetsService: AssetsService,
    private titLeService: Title) {
    titLeService.setTitle('Dashboard')
  }

  ngOnInit(): void {
    forkJoin([this.itemsService.getTotalPrice(), this.assetsService.countAsset(), this.assetsService.countAssetByStatus(StatusCode.DEPLOYABLE),
    this.assetsService.countAssetByStatus(StatusCode.ONASSIGN), this.assetsService.countAssetByStatus(StatusCode.UNDEPLOYABLE)]).pipe(takeLast(1)).subscribe(
      result => {
        let itemsResult: GetItemResTotalPriceDto = result[0]
        this.totalItem = itemsResult.data

        let countAssetResultAll: CountAssetByStatusResAssetsDto = result[1]
        this.countAsset = countAssetResultAll.data

        let countByAssetResultDeploy: CountAssetByStatusResAssetsDto = result[2]
        this.deployableAsset = countByAssetResultDeploy.data

        let countByAssetResultOnAssign: CountAssetByStatusResAssetsDto = result[3]
        this.onAssignAsset = countByAssetResultOnAssign.data

        let countByAssetResultUndploy: CountAssetByStatusResAssetsDto = result[4]
        this.undeployableAsset = countByAssetResultUndploy.data
      }
    )
  }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }
}