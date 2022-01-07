import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FindAllForPdfAssetsExpiredDto } from 'projects/core/src/app/dto/assets/find-all-for-pdf-assets-expired-dto';
import { Assets } from 'projects/core/src/app/model/assets';
import { Files } from 'projects/core/src/app/model/files';
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
    private assetsService: AssetsService, private titLeService: Title) {
      titLeService.setTitle('Asset Expired')
     }

  ngOnInit(): void {
    this.allDataAsset = new FindAllForPdfAssetsExpiredDto()
    this.assetsService.findAllForPdf().subscribe(result => {
      this.allDataAsset = result
      this.listAsset = this.allDataAsset.data
    })
  }

  isDisplayAvail(data : Files) : boolean{
    if(data){
      return true;
    } 
    return false
  }

  downloadPdf() : void{
    this.assetsService.generatePdf().subscribe(
      result=>{})
  }

  sendPdf() : void{
    this.assetsService.sendFileToEmail().subscribe(
      result=>{})
  }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }
}
