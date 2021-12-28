import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteResDataDto } from '../../dto/all-dto-global/delete-res-data-dto';
import { InsertResDto } from '../../dto/all-dto-global/insert-res-dto';
import { UpdateResDto } from '../../dto/all-dto-global/update-res-dto';
import { FindAllResItemTypesDto } from '../../dto/item-types/find-all-res-item-types-dto';
import { FindByIdResItemTypesDto } from '../../dto/item-types/find-by-id-res-item-types-dto';
import { ItemTypes } from '../../model/item-types';

@Injectable({
  providedIn: 'root'
})
export class ItemTypesService {

  constructor(private http : HttpClient ) { }

  findAll() : Observable<FindAllResItemTypesDto> {
    return this.http.get<FindAllResItemTypesDto>('http://localhost:8080/item-types')
  }

  findById(id : string | null) : Observable<FindByIdResItemTypesDto> {
    return this.http.get<FindByIdResItemTypesDto>(`http://localhost:8080/item-types/${id}`)
  }

  insert(data : ItemTypes) :  Observable<InsertResDto>{
    return  this.http.post<InsertResDto>(`http://localhost:8080/item-types/`, data)
  }

  update(data : ItemTypes) :  Observable<UpdateResDto>{
    return  this.http.put<UpdateResDto>(`http://localhost:8080/item-types/`, data)
  }

  delete(id : string | null) : Observable<DeleteResDataDto> {
    return this.http.delete<DeleteResDataDto>(`http://localhost:8080/item-types/${id}`)
  }
}
