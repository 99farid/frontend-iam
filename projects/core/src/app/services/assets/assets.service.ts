import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Assets } from '../../model/assets';
import { Observable } from 'rxjs';
import { InsertResDataDto } from '../../dto/all-dto-global/insert-res-data-dto';
import { InsertResDto } from '../../dto/all-dto-global/insert-res-dto';
import { InsertReqAssetDto } from '../../dto/assets/insert-req-assets-dto';
import { FindAllResAssetsDto } from '../../dto/assets/find-all-res-assets-dto';
import { FindByIdResAssetsDto } from '../../dto/assets/find-by-id-res-assets-dto';
import { UpdateResDto } from '../../dto/all-dto-global/update-res-dto';
import { Files } from '../../model/files';
import { FindAllFilterBySearchResAssetsDto } from '../../dto/assets/find-all-filter-by-search-res-assets-dto';
import { FindAllFilterBySearchResGeneralItemDto } from '../../dto/assets/find-all-filter-by-search-res-general-item-dto';
import { FindAllFilterBySearchResComponentDto } from '../../dto/assets/find-all-filter-by-search-res-component-dto';
import { CountAssetResAssetsDto } from '../../dto/assets/count-asset-res-assets-dto';
import { CountAssetByStatusResAssetsDto } from '../../dto/assets/count-asset-by-status-res-assets-dto';
import { FindAllForPdfAssetsExpiredDto } from '../../dto/assets/find-all-for-pdf-assets-expired-dto';
import { SendResEmailDto } from '../../dto/all-dto-global/send-res-email-dto';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor(private http: HttpClient) { }

  insert(data: InsertReqAssetDto, display: File | null, invoicePict: File | null): Observable<InsertResDto> {
    const formData: FormData = new FormData()
    formData.append('data', JSON.stringify(data))
    if (display)
      formData.append('display', display)
    if (invoicePict)
      formData.append('invoicePict', invoicePict)
    return this.http.post<InsertResDto>('http://localhost:8080/assets', formData)
  }

  update(data: Assets, display: File | null): Observable<UpdateResDto> {
    console.log(data)
    const formData: FormData = new FormData()
    formData.append('data', JSON.stringify(data))
    if (display)
      formData.append('display', display)
    return this.http.put<UpdateResDto>('http://localhost:8080/assets', formData)
  }

  insertExcel(data: FormData): Observable<InsertResDto> {
    return this.http.post<InsertResDto>('http://localhost:8080/assets/excel', data)
  }

  findAll(): Observable<FindAllResAssetsDto> {
    return this.http.get<FindAllResAssetsDto>('http://localhost:8080/assets')
  }

  findById(id: string | null): Observable<FindByIdResAssetsDto> {
    return this.http.get<FindByIdResAssetsDto>(`http://localhost:8080/assets/${id}`)
  }

  findAllFilterBySearch(input: string): Observable<FindAllFilterBySearchResAssetsDto> {
    return this.http.get<FindAllFilterBySearchResAssetsDto>(`http://localhost:8080/assets/search/${input}`)
  }

  findAllFilterBySearchForGeneralItem(input: string): Observable<FindAllFilterBySearchResGeneralItemDto> {
    return this.http.get<FindAllFilterBySearchResGeneralItemDto>(`http://localhost:8080/assets/general/${input}`)
  }

  findAllFilterBySearchForComponent(input: string): Observable<FindAllFilterBySearchResComponentDto> {
    return this.http.get<FindAllFilterBySearchResComponentDto>(`http://localhost:8080/assets/component/${input}`)
  }

  countAsset(): Observable<CountAssetResAssetsDto> {
    return this.http.get<CountAssetResAssetsDto>('http://localhost:8080/assets/count')
  }

  countAssetByStatus(statusCode: string): Observable<CountAssetByStatusResAssetsDto> {
    return this.http.get<CountAssetByStatusResAssetsDto>(`http://localhost:8080/assets/count-by-status?q=${statusCode}`)
  }

  downloadTemplate () : Observable<any> {
    return this.http.get<any>('http://localhost:8080/assets/excel')
  }

  findAllForPdf(): Observable<FindAllForPdfAssetsExpiredDto>{
    return this.http.get<FindAllForPdfAssetsExpiredDto>('http://localhost:8080/assets/view')
  }

  generatePdf(): Observable<FindAllForPdfAssetsExpiredDto>{
    return this.http.get<FindAllForPdfAssetsExpiredDto>('http://localhost:8080/assets/pdf')
  }

  sendFileToEmail(): Observable<SendResEmailDto>{
    return this.http.get<SendResEmailDto>('http://localhost:8080/assets/send-pdf')
  }
}