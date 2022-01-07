import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FindByIdResStatusAssetsDto } from 'projects/core/src/app/dto/status-assets/find-by-id-res-status-assets-dto';
import { StatusAssets } from 'projects/core/src/app/model/status-assets';
import { StatusAssetsService } from 'projects/core/src/app/services/status-assets/status-assets.service';

@Component({
  selector: 'app-status-assets-action',
  templateUrl: './status-assets-action.component.html',
  styleUrls: ['./status-assets-action.component.css']
})
export class StatusAssetsActionComponent implements OnInit {

  isDisabled: boolean = false
  dataInsert: StatusAssets = new StatusAssets()
  dataUpdate: StatusAssets = new StatusAssets()

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private statusAssetService: StatusAssetsService, private titLeService: Title) {
    titLeService.setTitle('Status Asset Form')
  }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      this.statusAssetService.findById(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(
        result => {
          const statusResult: FindByIdResStatusAssetsDto = result
          this.dataUpdate = statusResult.data
          this.isDisabled = true

          this.dataInsert.id = this.dataUpdate.id
          this.dataInsert.code = this.dataUpdate.code
          this.dataInsert.version = this.dataUpdate.version
          this.dataInsert.createdBy = this.dataUpdate.createdBy
          this.dataInsert.createdDate = this.dataUpdate.createdDate
        }
      )
    }
  }

  submit(): void {
    if (this.dataInsert.id) {
      this.statusAssetService.update(this.dataInsert).subscribe({
        next: result => {
          this.router.navigateByUrl('/status-assets')
        }
      })
    } else {
      this.statusAssetService.insert(this.dataInsert).subscribe({
        next: result => {
          this.router.navigateByUrl('/status-assets')
        }
      })
    }
  }

  clickBack() {
    this.router.navigateByUrl('/status-assets')
  }

}
