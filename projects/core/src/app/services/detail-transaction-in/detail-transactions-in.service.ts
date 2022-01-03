import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FindByIdHeaderResDetailTransactionInDto } from '../../dto/detail-transactions-in/find-by-id-header-res-detail-transactions-in-dto';

@Injectable({
  providedIn: 'root'
})
export class DetailTransactionsInService {

  constructor(private http : HttpClient) { }
  findByIdHeader (id : string | null) : Observable<FindByIdHeaderResDetailTransactionInDto>{
    return this.http.get<FindByIdHeaderResDetailTransactionInDto>(`http://localhost:8080/detail-transactions-in/header/${id}`)
  }
}
