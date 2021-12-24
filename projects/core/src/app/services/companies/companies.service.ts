import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FindAllFilterBySearchResCompaniesDto } from '../../dto/companies/find-all-filter-by-search-res-companies-dto';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http:HttpClient) { }

  findAllFilterBySearch(input : string) : Observable<FindAllFilterBySearchResCompaniesDto>{
    return this.http.get<FindAllFilterBySearchResCompaniesDto>(`http://localhost:8080/companies/search/${input}`)
  }
}
