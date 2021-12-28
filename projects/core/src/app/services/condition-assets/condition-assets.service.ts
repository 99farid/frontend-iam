import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteResDataDto } from '../../dto/all-dto-global/delete-res-data-dto';
import { InsertResDto } from '../../dto/all-dto-global/insert-res-dto';
import { FindAllResConditionAssetsDto } from '../../dto/condition-assets/find-all-res-condition-assets-dto';
import { FindByIdResConditionAssetsDto } from '../../dto/condition-assets/find-by-id-res-condition-assets-dto';
import { ConditionAssets } from '../../model/condition-assets';

@Injectable({
  providedIn: 'root'
})
export class ConditionAssetsService {

  constructor(private http : HttpClient) { }

  findAll() : Observable<FindAllResConditionAssetsDto>{
    return this.http.get<FindAllResConditionAssetsDto>('http://localhost:8080/condition-assets')
  }

  findById(id:string | null) : Observable<FindByIdResConditionAssetsDto>{
    return this.http.get<FindByIdResConditionAssetsDto>(`http://localhost:8080/condition-assets/${id}`)
  }

  insert(data : ConditionAssets) : Observable<InsertResDto>{
    return this.http.post<InsertResDto>('http://localhost:8080/condition-assets', data)
  }

  update(data : ConditionAssets) : Observable<InsertResDto>{
    return this.http.put<InsertResDto>('http://localhost:8080/condition-assets', data)
  }

  delete(id : string) : Observable<DeleteResDataDto>{
    return this.http.delete<DeleteResDataDto>(`http://localhost:8080/condition-assets/${id}`)
  }
}
