import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FindAllResItemTypesDto } from '../../dto/item-types/find-all-res-item-types-dto';

@Injectable({
  providedIn: 'root'
})
export class ItemTypesService {

  constructor(private http : HttpClient ) { }

  findAll() : Observable<FindAllResItemTypesDto> {
    return this.http.get<FindAllResItemTypesDto>('http://localhost:8080/item-types')
  }
}
