import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FindAllResAssetsDto } from 'projects/core/src/app/dto/assets/find-all-res-assets-dto';
import { Assets } from 'projects/core/src/app/model/assets';
import { Files } from 'projects/core/src/app/model/files';
import { AssetsService } from 'projects/core/src/app/services/assets/assets.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.css']
})
export class AssetsListComponent implements OnInit, OnDestroy {

  listAsset: Assets[] = []

  private obs?: Subscription

  constructor(private assetsService: AssetsService,
    private router: Router, private titLeService: Title) {
      titLeService.setTitle('Asset') 
    }

  ngOnInit(): void {
    this.assetsService.findAll().subscribe({
      next: result => {
        let assetResult: FindAllResAssetsDto = result;
        this.listAsset = assetResult.data
      }
    })
  }

  isDisplayAvail(data: Files): boolean {
    if (data) {
      return true;
    }
    return false
  }

  clickCreate(): void {
    this.router.navigateByUrl('/assets/new')
  }

  clickUpdate(id: string): void {
    this.router.navigateByUrl(`/assets/modify/${id}`)
  }

  clickDetail(id: string): void {
    this.router.navigateByUrl(`/items-detail/${id}`)
  }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }

}
