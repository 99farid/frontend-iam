import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsertResDto } from '../../dto/all-dto-global/insert-res-dto';
import { UpdateResDto } from '../../dto/all-dto-global/update-res-dto';
import { FindAllResInvoicesDto } from '../../dto/invoices/find-all-res-invoices-dto';
import { FindByIdResInvoicesDto } from '../../dto/invoices/find-by-id-res-invoices-dto';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(private http : HttpClient) { }

  findAll() : Observable<FindAllResInvoicesDto>{
    return this.http.get<FindAllResInvoicesDto>('http://localhost:8080/invoices')
  }

  findById(id:string | null) : Observable<FindByIdResInvoicesDto>{
    return this.http.get<FindByIdResInvoicesDto>(`http://localhost:8080/invoices/${id}`)
  }

  insert(data:FormData) : Observable<InsertResDto>{
    return this.http.post<InsertResDto>(`http://localhost:8080/invoices`, data)
  }

  update(data:FormData) : Observable<UpdateResDto>{
    return this.http.put<UpdateResDto>(`http://localhost:8080/invoices`, data)
  }
}
