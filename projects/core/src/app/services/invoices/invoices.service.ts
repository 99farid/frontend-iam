import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FindAllResInvoicesDto } from '../../dto/invoices/find-all-res-invoices-dto';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(private http : HttpClient) { }

  findAll() : Observable<FindAllResInvoicesDto>{
    return this.http.get<FindAllResInvoicesDto>('http://localhost:8080/invoices')
  }
}
