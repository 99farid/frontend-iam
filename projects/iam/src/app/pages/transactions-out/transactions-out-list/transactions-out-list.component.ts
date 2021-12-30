import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FindAllResTransactionsOutDto } from 'projects/core/src/app/dto/transactions-out/find-all-res-transactions-out-dto';
import { TransactionsOut} from 'projects/core/src/app/model/transactions-out';
import { AuthenticationService } from 'projects/core/src/app/services/authentication/authentication.service';
import { TransactionsOutService } from 'projects/core/src/app/services/transactions-out/transactions-out.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transactions-out-list',
  templateUrl: './transactions-out-list.component.html',
  styleUrls: ['./transactions-out-list.component.css']
})
export class TransactionsOutListComponent implements OnInit, OnDestroy {

  allDataTrxOut?: FindAllResTransactionsOutDto

  private obs?: Subscription

  listTransOut: TransactionsOut[] = []

  constructor(private router: Router, private transactionsOutService: TransactionsOutService,
    private authService: AuthenticationService) { }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }

  ngOnInit(): void {
    this.allDataTrxOut = new FindAllResTransactionsOutDto()
    this.transactionsOutService.findAllTrxOut().subscribe(result => {
      this.allDataTrxOut = result
      this.listTransOut = this.allDataTrxOut.data
    })
  }

  clickView(idHeader?: string): void {
    this.router.navigateByUrl(`/transactions-out-view/${idHeader}`)
  }
}