import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FindAllForPdfTrxExpiredDto } from 'projects/core/src/app/dto/detail-transactions-out/find-all-for-pdf-trx-expired-dto';
import { DetailTransactionsOut } from 'projects/core/src/app/model/detail-transactions-out';
import { DetailTransactionsOutService } from 'projects/core/src/app/services/detail-transactions-out/detail-transactions-out.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transactions-expired',
  templateUrl: './transactions-expired.component.html',
  styleUrls: ['./transactions-expired.component.css']
})
export class TransactionsExpiredComponent implements OnInit {

  allDataExpired?: FindAllForPdfTrxExpiredDto

  private obs?: Subscription

  listDetail: DetailTransactionsOut[] = []

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private detailTransOutService: DetailTransactionsOutService) { }

  ngOnInit(): void {
    this.allDataExpired = new FindAllForPdfTrxExpiredDto()
    this.detailTransOutService.findAllForPdf().subscribe(result => {
      this.allDataExpired = result
      this.listDetail = this.allDataExpired.data
    })
  }

  sendPdf() : void{
    this.detailTransOutService.sendFileToEmail().subscribe(
      result=>{})
  }

  clickBack(): void {
    this.router.navigateByUrl('/transactions-out')
  }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }

}
