import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsertResDto } from '../../dto/all-dto-global/insert-res-dto';
import { FindAllResTranscationsInDto } from '../../dto/transactions-in/find-all-res-transactions-in-dto';
import { FindByIdResTranscationsInDto } from '../../dto/transactions-in/find-by-id-res-transactions-in-dto';
import { InsertReqTransactionInDto } from '../../dto/transactions-in/insert-req-transaction-in-dto';

@Injectable({
  providedIn: 'root'
})
export class TransactionsInService {

  constructor(private http : HttpClient) { }
  findAll() : Observable<FindAllResTranscationsInDto>{
    return this.http.get<FindAllResTranscationsInDto>('http://localhost:8080/transactions-in/')
  }
  findById(id : string | null) : Observable<FindByIdResTranscationsInDto>{
    return this.http.get<FindByIdResTranscationsInDto>(`http://localhost:8080/transactions-in/${id}`)
  }
  insert(data : InsertReqTransactionInDto) : Observable<InsertResDto>{
    return this.http.post<InsertResDto>('http://localhost:8080/transactions-in/', data)
  }
}
