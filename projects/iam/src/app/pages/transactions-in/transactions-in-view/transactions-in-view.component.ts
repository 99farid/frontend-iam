import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailTransactionsIn } from 'projects/core/src/app/model/detail-transactions-in';
import { Files } from 'projects/core/src/app/model/files';
import { TransactionsIn } from 'projects/core/src/app/model/transactions-in';
import { DetailTransactionsInService } from 'projects/core/src/app/services/detail-transactions-in/detail-transactions-in.service';
import { TransactionsInService } from 'projects/core/src/app/services/transactions-in/transactions-in.service';

@Component({
  selector: 'app-transactions-in-view',
  templateUrl: './transactions-in-view.component.html',
  styleUrls: ['./transactions-in-view.component.css']
})
export class TransactionsInViewComponent implements OnInit {

  listOrderDetail: DetailTransactionsIn[] = []
  header : TransactionsIn = new TransactionsIn();

  constructor(private router: Router, private detailTrxInService : DetailTransactionsInService,
    private activatedRoute : ActivatedRoute, private trxInService : TransactionsInService) { }
  idHeader : string | null = this.activatedRoute.snapshot.paramMap.get('id')
  ngOnInit(): void {
    this.detailTrxInService.findByIdHeader(this.idHeader).subscribe(
      result => {
        this.listOrderDetail = result.data
      }

    )
    this.trxInService.findById(this.idHeader).subscribe(
      result => {
        this.header = result.data
      }
    )
  }

  clickBack(): void {
    this.router.navigateByUrl('/transactions-in')
  }

  isDisplayAvail(data : Files){
    if(data){
      return true
    }else{
      return false
    }
  }

}

