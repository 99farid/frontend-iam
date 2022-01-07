import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TransactionsIn } from 'projects/core/src/app/model/transactions-in';
import { TransactionsInService } from 'projects/core/src/app/services/transactions-in/transactions-in.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transactions-in-list',
  templateUrl: './transactions-in-list.component.html',
  styleUrls: ['./transactions-in-list.component.css']
})
export class TransactionsInListComponent implements OnInit, OnDestroy {

  private obs?:Subscription

  listTrx: TransactionsIn[] = []

  constructor(private router: Router, private trxInService : TransactionsInService, 
    private titLeService: Title) {
    titLeService.setTitle('Transaction In') }

  ngOnInit(): void {
    this.obs = this.trxInService.findAll().subscribe(
      result => {
        this.listTrx =result.data
      }
    )
  }

  clickView(id : string): void {
    this.router.navigateByUrl(`/transactions-in/detail/${id}`)
  }

  downloadPdf() : void{
    this.trxInService.generatePdf().subscribe(
      result=>{})
  }

  sendPdf() : void{
    this.trxInService.sendFileToEmail().subscribe(
      result=>{})
  }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }
}
