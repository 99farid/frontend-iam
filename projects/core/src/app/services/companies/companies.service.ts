import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsertResDataDto } from '../../dto/all-dto-global/insert-res-data-dto';
import { FindAllFilterBySearchResCompaniesDto } from '../../dto/companies/find-all-filter-by-search-res-companies-dto';
import { FindAllResCompaniesDto } from '../../dto/companies/find-all-res-companies-dto';
import { FindByIdResCompaniesDto } from '../../dto/companies/find-by-id-res-companies-dto';
import { Companies } from '../../model/companies';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) { }

  findAllFilterBySearch(input: string): Observable<FindAllFilterBySearchResCompaniesDto> {
    return this.http.get<FindAllFilterBySearchResCompaniesDto>(`http://localhost:8080/companies/search/${input}`)
  }

  findAllCompanies(): Observable<FindAllResCompaniesDto> {
    return this.http.get<FindAllResCompaniesDto>('http://localhost:8080/companies')
  }

  findByIdCompanies(id: number): Observable<FindByIdResCompaniesDto> {
    return this.http.get<FindByIdResCompaniesDto>(`http://localhost:8080/companies/:${id}`)
  }

  insert(dataAll: Companies): Observable<InsertResDataDto> {
    return this.http.post<InsertResDataDto>('http://localhost:8080/companies/', dataAll)
  }
}
