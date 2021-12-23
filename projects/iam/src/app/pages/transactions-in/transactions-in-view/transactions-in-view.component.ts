import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactions-in-view',
  templateUrl: './transactions-in-view.component.html',
  styleUrls: ['./transactions-in-view.component.css']
})
export class TransactionsInViewComponent implements OnInit {

  listOrderDetail: OrderDetail[] = []

  constructor(private router: Router) { }

  ngOnInit(): void {
    const ordet1 = new OrderDetail()
    ordet1.number = 1
    ordet1.display = "Laptop"
    ordet1.itemName = "Laptop"
    ordet1.condition = "Ready to Deploy"
    this.listOrderDetail.push(ordet1)

    const ordet2 = new OrderDetail()
    ordet2.number = 2
    ordet2.display = "Laptop"
    ordet2.itemName = "Laptop"
    ordet2.condition = "Ready to Deploy"
    this.listOrderDetail.push(ordet2)

    const ordet3 = new OrderDetail()
    ordet3.number = 3
    ordet3.display = "Printer"
    ordet3.itemName = "Printer"
    ordet3.condition = "Ready to Deploy"
    this.listOrderDetail.push(ordet3)

    const ordet4 = new OrderDetail()
    ordet4.number = 4
    ordet4.display = "Printer"
    ordet4.itemName = "Printer"
    ordet4.condition = "Broken"
    this.listOrderDetail.push(ordet4)
  }

  clickBack(): void {
    this.router.navigateByUrl('/transactions-in-list')
  }

}

class OrderDetail {
  number?: number
  display?: string
  itemName?: string
  condition?: string
}
