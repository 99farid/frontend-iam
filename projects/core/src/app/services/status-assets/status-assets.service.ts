import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteResDataDto } from '../../dto/all-dto-global/delete-res-data-dto';
import { InsertResDto } from '../../dto/all-dto-global/insert-res-dto';
import { UpdateResDto } from '../../dto/all-dto-global/update-res-dto';
import { FindAllResStatusAssetsDto } from '../../dto/status-assets/find-all-res-status-assets-dto';
import { FindByIdResStatusAssetsDto } from '../../dto/status-assets/find-by-id-res-status-assets-dto';
import { StatusAssets } from '../../model/status-assets';

@Injectable({
  providedIn: 'root'
})
export class StatusAssetsService {

  constructor(private http : HttpClient) { }

  findAll() : Observable<FindAllResStatusAssetsDto>{
    return this.http.get<FindAllResStatusAssetsDto>('http://localhost:8080/status-assets')
  }
  findById(id:string | null) : Observable<FindByIdResStatusAssetsDto>{
    return this.http.get<FindByIdResStatusAssetsDto>(`http://localhost:8080/status-assets/${id}`)
  }

  insert(data:StatusAssets) : Observable<InsertResDto>{
    return this.http.post<InsertResDto>(`http://localhost:8080/status-assets`, data)
  }

  update(data:StatusAssets) : Observable<UpdateResDto>{
    return this.http.put<UpdateResDto>(`http://localhost:8080/status-assets`, data)
  }

  delete(id:string | null) : Observable<DeleteResDataDto>{
    return this.http.delete<DeleteResDataDto>(`http://localhost:8080/status-assets/${id}`)
  }
}
