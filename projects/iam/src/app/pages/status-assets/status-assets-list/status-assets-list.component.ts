import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { FindAllResStatusAssetsDto } from 'projects/core/src/app/dto/status-assets/find-all-res-status-assets-dto';
import { StatusAssets } from 'projects/core/src/app/model/status-assets';
import { StatusAssetsService } from 'projects/core/src/app/services/status-assets/status-assets.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-status-assets-list',
  templateUrl: './status-assets-list.component.html',
  styleUrls: ['./status-assets-list.component.css'],
  providers: [ConfirmationService]
})
export class StatusAssetsListComponent implements OnInit, OnDestroy {

  listStatus: StatusAssets[] = []

  private obs?: Subscription

  constructor(private router: Router, private statusService: StatusAssetsService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.initData()
  }

  initData(): void {
    this.statusService.findAll().subscribe({
      next: result => {
        const statusResult: FindAllResStatusAssetsDto = result
        this.listStatus = statusResult.data;
      }
    })
  }

  clickCreate(): void {
    this.router.navigateByUrl(`/status-assets/new`)
  }

  clickUpdate(id: string) {
    this.router.navigateByUrl(`/status-assets/modify/${id}`)
  }

  confirm(id: string): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to Remove?',
      accept: () => {
        this.statusService.delete(id).subscribe({
          next: result => {
            this.initData()
          }
        })
      }
    });
  }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }
}
