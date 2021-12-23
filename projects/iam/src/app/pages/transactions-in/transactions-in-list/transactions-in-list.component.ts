import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactions-in-list',
  templateUrl: './transactions-in-list.component.html',
  styleUrls: ['./transactions-in-list.component.css']
})
export class TransactionsInListComponent implements OnInit {

  listOrder: Order[] = []

  constructor(private router: Router) { }

  ngOnInit(): void {
    const order1 = new Order()
    order1.number = 1
    order1.transactionNo = "TRXI1"
    order1.receiver = "Pandika Pinata"
    order1.checkInDate = "12-12-2022"
    this.listOrder.push(order1)

    const order2 = new Order()
    order2.number = 2
    order2.transactionNo = "TRXI2"
    order2.receiver = "Gita Saraswati"
    order2.checkInDate = "12-12-2022"
    this.listOrder.push(order2)

    const order3 = new Order()
    order3.number = 3
    order3.transactionNo = "TRXI3"
    order3.receiver = "Trio Pinan"
    order3.checkInDate = "12-12-2022"
    this.listOrder.push(order3)

    const order4 = new Order()
    order4.number = 4
    order4.transactionNo = "TRXI4"
    order4.receiver = "Azma Joevanca"
    order4.checkInDate = "12-12-2022"
    this.listOrder.push(order4)

    const order5 = new Order()
    order5.number = 5
    order5.transactionNo = "TRXI5"
    order5.receiver = "Rika Hari"
    order5.checkInDate = "12-12-2022"
    this.listOrder.push(order5)

    const order6 = new Order()
    order6.number = 6
    order6.transactionNo = "TRXI6"
    order6.receiver = "Tina Maharani"
    order6.checkInDate = "12-12-2022"
    this.listOrder.push(order6)

    const order7 = new Order()
    order7.number = 7
    order7.transactionNo = "TRXI7"
    order7.receiver = "Tina Maharani"
    order7.checkInDate = "12-12-2022"
    this.listOrder.push(order7)

    const order8 = new Order()
    order8.number = 8
    order8.transactionNo = "TRXI8"
    order8.receiver = "Tina Maharani"
    order8.checkInDate = "12-12-2022"
    this.listOrder.push(order8)

    const order9 = new Order()
    order9.number = 9
    order9.transactionNo = "TRXI9"
    order9.receiver = "Tina Maharani"
    order9.checkInDate = "12-12-2022"
    this.listOrder.push(order9)

    const order10 = new Order()
    order10.number = 10
    order10.transactionNo = "TRXI0"
    order10.receiver = "Gita Sarawasti"
    order10.checkInDate = "12-12-2022"
    this.listOrder.push(order10)
  }

  clickView(): void {
    this.router.navigateByUrl('/transactions-in-view')
  }
}

class Order {
  number?: number
  transactionNo?: string
  receiver?: string
  checkInDate?: string
}