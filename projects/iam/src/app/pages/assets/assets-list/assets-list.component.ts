import { Component, OnInit } from '@angular/core';
import { FindAllResAssetsDto } from 'projects/core/src/app/dto/assets/find-all-res-assets-dto';
import { Assets } from 'projects/core/src/app/model/assets';
import { Files } from 'projects/core/src/app/model/files';
import { AssetsService } from 'projects/core/src/app/services/assets/assets.service';

@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.css']
})
export class AssetsListComponent implements OnInit {
  listAsset : Assets[] = []
  constructor(private assetsService : AssetsService) { }

  ngOnInit(): void {
    this.assetsService.findAll().subscribe({next : result => {
      let assetResult : FindAllResAssetsDto = result;
      this.listAsset = assetResult.data
     }
    })
  }
  isDisplayAvail(data : Files) : boolean{
    if(data){
      return true;
    } 
    return false
  }

}
