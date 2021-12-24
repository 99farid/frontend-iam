import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactions-out-view',
  templateUrl: './transactions-out-view.component.html',
  styleUrls: ['./transactions-out-view.component.css']
})
export class TransactionsOutViewComponent implements OnInit {

  listOrderDetail: OrderDetail[] = []

  constructor(private router: Router) { }

  ngOnInit(): void {
    const ordet1 = new OrderDetail()
    ordet1.number = 1
    ordet1.assetCode = "GLP1"
    ordet1.display = "Laptop"
    ordet1.itemName = "Laptop"
    ordet1.company = "Lawencon"
    this.listOrderDetail.push(ordet1)

    const ordet2 = new OrderDetail()
    ordet2.number = 2
    ordet2.assetCode = "GPR1"
    ordet2.display = "Printer"
    ordet2.itemName = "Printer"
    ordet2.company = "Linov"
    this.listOrderDetail.push(ordet2)

    const ordet3 = new OrderDetail()
    ordet3.number = 3
    ordet3.assetCode = "GTP1"
    ordet3.display = "Printer"
    ordet3.itemName = "Printer"
    ordet3.company = "Linov"
    this.listOrderDetail.push(ordet3)

    const ordet4 = new OrderDetail()
    ordet4.number = 4
    ordet4.assetCode = "GHD1"
    ordet4.display = "HDD 1TB"
    ordet4.itemName = "HDD 1TB"
    ordet4.company = "Lawencon"
    this.listOrderDetail.push(ordet4)
  }

  clickBack(): void {
    this.router.navigateByUrl('/transactions-OUT-list')
  }

}

class OrderDetail {
  number?: number
  assetCode?: string
  display?: string
  itemName?: string
  company?: string
}