import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteResDataDto } from '../../dto/all-dto-global/delete-res-data-dto';
import { InsertResDto } from '../../dto/all-dto-global/insert-res-dto';
import { UpdateResDto } from '../../dto/all-dto-global/update-res-dto';
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

  findByIdCompanies(id: string | null): Observable<FindByIdResCompaniesDto> {
    return this.http.get<FindByIdResCompaniesDto>(`http://localhost:8080/companies/${id}`)
  }

  insert(data: Companies): Observable<InsertResDto> {
    return this.http.post<InsertResDto>('http://localhost:8080/companies/', data)
  }

  update(data: Companies): Observable<UpdateResDto> {
    return this.http.put<UpdateResDto>('http://localhost:8080/companies/', data)
  }

  delete(id: string): Observable<DeleteResDataDto> {
    return this.http.delete<DeleteResDataDto>(`http://localhost:8080/companies/${id}`)
  }
}
