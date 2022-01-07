import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { FindAllResConditionAssetsDto } from 'projects/core/src/app/dto/condition-assets/find-all-res-condition-assets-dto';
import { ConditionAssets } from 'projects/core/src/app/model/condition-assets';
import { ConditionAssetsService } from 'projects/core/src/app/services/condition-assets/condition-assets.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-condition-assets-list',
  templateUrl: './condition-assets-list.component.html',
  styleUrls: ['./condition-assets-list.component.css'],
  providers: [ConfirmationService]
})
export class ConditionAssetsListComponent implements OnInit, OnDestroy {

  listConditionAssets: ConditionAssets[] = []

  private obs?: Subscription

  constructor(private router: Router, private conditionService: ConditionAssetsService,
    private confirmationService: ConfirmationService, private titLeService: Title) {
    titLeService.setTitle('Condition Asset')
  }

  ngOnInit(): void {
    this.initData()
  }

  initData(): void {
    this.conditionService.findAll().subscribe({
      next: result => {
        let conditionResult: FindAllResConditionAssetsDto = result
        this.listConditionAssets = conditionResult.data
      }
    })
  }

  clickCreate(): void {
    this.router.navigateByUrl('/condition-assets/new')
  }

  clickUpdate(id: string): void {
    this.router.navigateByUrl(`/condition-assets/modify/${id}`)
  }

  confirm(id: string): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to Remove?',
      accept: () => {
        this.conditionService.delete(id).subscribe({
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