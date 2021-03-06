import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SendResEmailDto } from '../../dto/all-dto-global/send-res-email-dto';
import { FindAllForPdfTrxExpiredDto } from '../../dto/detail-transactions-out/find-all-for-pdf-trx-expired-dto';
import { FindAllResDetailTransactionsOutDto } from '../../dto/detail-transactions-out/find-all-res-detail-transactions-out-dto';
import { FindByIdResDetailTransactionsOutDto } from '../../dto/detail-transactions-out/find-by-id-res-detail-transactions-out-dto';
import { FindByIdResHeaderDto } from '../../dto/detail-transactions-out/find-by-id-res-header-dto';

@Injectable({
  providedIn: 'root'
})
export class DetailTransactionsOutService {

  constructor(private http: HttpClient) { }

  findAllDetailTrxOut(): Observable<FindAllResDetailTransactionsOutDto> {
    return this.http.get<FindAllResDetailTransactionsOutDto>('http://localhost:8080/detail-transactions-out')
  } 

  findByIdDetailTrxOut(id: string | null): Observable<FindByIdResDetailTransactionsOutDto> {
    return this.http.get<FindByIdResDetailTransactionsOutDto>(`http://localhost:8080/detail-transactions-out/${id}`)
  }

  findByIdHeader(idHeader: string): Observable<FindByIdResHeaderDto> {
    return this.http.get<FindByIdResHeaderDto>(`http://localhost:8080/detail-transactions-out/header/${idHeader}`)
  }

  findByIdHeaderForCheckIn(idHeader: string): Observable<FindByIdResHeaderDto> {
    return this.http.get<FindByIdResHeaderDto>(`http://localhost:8080/detail-transactions-out/header-for-check-in/${idHeader}`)
  }

  findAllForPdf(): Observable<FindAllForPdfTrxExpiredDto>{
    return this.http.get<FindAllForPdfTrxExpiredDto>('http://localhost:8080/detail-transactions-out/view')
  }

  generatePdf(): Observable<FindAllForPdfTrxExpiredDto>{
    return this.http.get<FindAllForPdfTrxExpiredDto>('http://localhost:8080/detail-transactions-out/pdf')
  }

  sendFileToEmail(): Observable<SendResEmailDto>{
    return this.http.get<SendResEmailDto>('http://localhost:8080/detail-transactions-out/send-pdf')
  }
}
