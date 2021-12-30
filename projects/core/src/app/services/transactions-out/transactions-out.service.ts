import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsertResDataDto } from '../../dto/all-dto-global/insert-res-data-dto';
import { FindAllResFilterByIdEmployeeDto } from '../../dto/transactions-out/find-all-res-filter-by-id-employee-dto';
import { FindAllResFilterByIdGeneralItemDto } from '../../dto/transactions-out/find-all-res-filter-by-id-general-item-dto';
import { FindAllResFilterByIdLocationDto } from '../../dto/transactions-out/find-all-res-filter-by-id-location-dto';
import { FindAllResTransactionsOutDto } from '../../dto/transactions-out/find-all-res-transactions-out-dto';
import { FindByIdResTransactionsOutDto } from '../../dto/transactions-out/find-by-id-res-transactions-out-dto';
import { InsertReqDataTransactionsOutDto } from '../../dto/transactions-out/insert-req-data-transactions-out-dto';

@Injectable({
  providedIn: 'root'
})
export class TransactionsOutService {

  constructor(private http: HttpClient) { }

  findAllTrxOut(): Observable<FindAllResTransactionsOutDto> {
    return this.http.get<FindAllResTransactionsOutDto>('http://localhost:8080/transactions-out')
  }

  findByIdTrxOut(id: number): Observable<FindByIdResTransactionsOutDto> {
    return this.http.get<FindByIdResTransactionsOutDto>(`http://localhost:8080/transactions-out/:${id}`)
  }

  insert(dataAll: InsertReqDataTransactionsOutDto): Observable<InsertResDataDto> {
    return this.http.post<InsertResDataDto>('http://localhost:8080/transactions-out/', dataAll)
  }

  findAllFilterByIdGeneralItem() : Observable<FindAllResFilterByIdGeneralItemDto>{
    return this.http.get<FindAllResFilterByIdGeneralItemDto>('http://localhost:8080/transactions-out/general-item');
  }

  findAllFilterByIdEmployee() : Observable<FindAllResFilterByIdEmployeeDto>{
    return this.http.get<FindAllResFilterByIdEmployeeDto>('http://localhost:8080/transactions-out/employee');
  }

  findAllFilterByIdLocation() : Observable<FindAllResFilterByIdLocationDto>{
    return this.http.get<FindAllResFilterByIdLocationDto>('http://localhost:8080/transactions-out/location');
  }
}
