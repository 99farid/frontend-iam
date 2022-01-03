import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FindByIdResDetailTransactionsOutDto } from 'projects/core/src/app/dto/detail-transactions-out/find-by-id-res-detail-transactions-out-dto';
import { FindByIdResHeaderDto } from 'projects/core/src/app/dto/detail-transactions-out/find-by-id-res-header-dto';
import { DetailTransactionsOut } from 'projects/core/src/app/model/detail-transactions-out';
import { Files } from 'projects/core/src/app/model/files';
import { DetailTransactionsOutService } from 'projects/core/src/app/services/detail-transactions-out/detail-transactions-out.service';
import { TransactionsOutService } from 'projects/core/src/app/services/transactions-out/transactions-out.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transactions-out-view',
  templateUrl: './transactions-out-view.component.html',
  styleUrls: ['./transactions-out-view.component.css']
})
export class TransactionsOutViewComponent implements OnInit, OnDestroy {

  trxOutById!: FindByIdResHeaderDto

  listDetTrxOut: DetailTransactionsOut[] = []

  codeTrxOut!: string

  id: string = String(this.activatedRoute.snapshot.paramMap.get('idHeader'))

  private obs?: Subscription

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private detailTransOutService: DetailTransactionsOutService) { }

  ngOnInit(): void {
    if (this.id) {
      this.obs = this.detailTransOutService.findByIdHeader(this.id)?.subscribe(result => {
        this.trxOutById = result
        this.listDetTrxOut = this.trxOutById.data
        this.codeTrxOut = result.data[0].transactionOut.code
      })
    }
  }
  
  isDisplayAvail(data : Files) : boolean{
    if(data){
      return true;
    } 
    return false
  }


  clickBack(): void {
    this.router.navigateByUrl('/transactions-out-list')
  }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }

}