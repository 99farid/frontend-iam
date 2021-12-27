import { Component, OnInit } from '@angular/core';
import { FindAllResInvoicesDto } from 'projects/core/src/app/dto/invoices/find-all-res-invoices-dto';
import { Invoices } from 'projects/core/src/app/model/invoices';
import { InvoicesService } from 'projects/core/src/app/services/invoices/invoices.service';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.css']
})
export class InvoicesListComponent implements OnInit {
  listInvoices : Invoices[] = []
  constructor(private invoiceService : InvoicesService) { }

  ngOnInit(): void {
    this.invoiceService.findAll().subscribe({
      next : result =>{
        const invoiceResult : FindAllResInvoicesDto = result
        this.listInvoices = invoiceResult.data
        console.log(this.listInvoices)
      }
    })
  }

}
