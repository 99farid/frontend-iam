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
    

    // const order1 = new Order()
    // order1.number = 1
    // order1.transactionNo = "TRXO1"
    // order1.receiver = "John"
    // order1.location = ""
    // order1.generalItem = ""
    // order1.checkOutDate = "12-12-2022"
    // this.listTransOut.push(order1)

    // const order2 = new Order()
    // order2.number = 2
    // order2.transactionNo = "TRXO2"
    // order2.receiver = ""
    // order2.location = ""
    // order2.generalItem = "HDD 1TB"
    // order2.checkOutDate = "12-12-2022"
    // this.listTransOut.push(order2)

    // const order3 = new Order()
    // order3.number = 3
    // order3.transactionNo = "TRXO3"
    // order3.receiver = ""
    // order3.location = "Ruang Bootcamp"
    // order3.generalItem = ""
    // order3.checkOutDate = "12-12-2022"
    // this.listTransOut.push(order3)

    // const order4 = new Order()
    // order4.number = 4
    // order4.transactionNo = "TRXO4"
    // order4.receiver = ""
    // order4.location = ""
    // order4.generalItem = "Laptop ASUS M255"
    // order4.checkOutDate = "12-12-2022"
    // this.listTransOut.push(order4)

    // const order5 = new Order()
    // order5.number = 5
    // order5.transactionNo = "TRXO5"
    // order5.receiver = "Shani"
    // order5.location = ""
    // order5.generalItem = ""
    // order5.checkOutDate = "12-12-2022"
    // this.listTransOut.push(order5)
  }

  clickView(): void {
    this.router.navigateByUrl('/transactions-out-view')
  }
}

class Order {
  number?: number
  transactionNo?: string
  receiver?: string
  location?: string
  generalItem?: string
  checkOutDate?: string
}