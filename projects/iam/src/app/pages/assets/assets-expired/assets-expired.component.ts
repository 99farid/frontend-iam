import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FindAllForPdfAssetsExpiredDto } from 'projects/core/src/app/dto/assets/find-all-for-pdf-assets-expired-dto';
import { Assets } from 'projects/core/src/app/model/assets';
import { AssetsService } from 'projects/core/src/app/services/assets/assets.service';
import { AuthenticationService } from 'projects/core/src/app/services/authentication/authentication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-assets-expired',
  templateUrl: './assets-expired.component.html',
  styleUrls: ['./assets-expired.component.css']
})
export class AssetsExpiredComponent implements OnInit, OnDestroy {

  allDataAsset?: FindAllForPdfAssetsExpiredDto

  private obs?: Subscription

  listAsset : Assets[] = []

  constructor(private router: Router, private authService: AuthenticationService,
    private assetsService: AssetsService) { }

  ngOnInit(): void {
    this.allDataAsset = new FindAllForPdfAssetsExpiredDto()
    this.assetsService.findAllForPdf().subscribe(result => {
      this.allDataAsset = result
      this.listAsset = this.allDataAsset.data
    })
  }

  clickBack(){
    this.router.navigateByUrl('/dashboard')
  }

  sendPdf() : void{
    this.assetsService.sendFileToEmail().subscribe(
      result=>{})
  }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }
}
