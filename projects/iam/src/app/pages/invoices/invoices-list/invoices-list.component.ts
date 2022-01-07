import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FindAllResInvoicesDto } from 'projects/core/src/app/dto/invoices/find-all-res-invoices-dto';
import { Invoices } from 'projects/core/src/app/model/invoices';
import { InvoicesService } from 'projects/core/src/app/services/invoices/invoices.service';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.css']
})
export class InvoicesListComponent implements OnInit {

  listInvoices: Invoices[] = []

  constructor(private router: Router, private invoiceService: InvoicesService,
    private titLeService: Title) {
    titLeService.setTitle('Invoice')
  }

  ngOnInit(): void {
    this.invoiceService.findAll().subscribe({
      next: result => {
        const invoiceResult: FindAllResInvoicesDto = result
        this.listInvoices = invoiceResult.data
        console.log(this.listInvoices)
      }
    })
  }

  clickCreate(): void {
    this.router.navigateByUrl('/invoices/new')
  }

  clickUpdate(id: string): void {
    this.router.navigateByUrl(`/invoices/modify/${id}`)
  }
}