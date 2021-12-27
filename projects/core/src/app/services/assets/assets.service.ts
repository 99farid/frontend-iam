import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Assets } from '../../model/assets';
import { Observable } from 'rxjs';
import { InsertResDataDto } from '../../dto/all-dto-global/insert-res-data-dto';
import { InsertResDto } from '../../dto/all-dto-global/insert-res-dto';
import { InsertReqAssetDto } from '../../dto/assets/insert-req-assets-dto';
import { FindAllResAssetsDto } from '../../dto/assets/find-all-res-assets-dto';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor(private http : HttpClient) { }

  insert(data : FormData) : Observable<InsertResDto>{
    return this.http.post<InsertResDto>('http://localhost:8080/assets', data)
  }

  findAll() : Observable<FindAllResAssetsDto>{
    return this.http.get<FindAllResAssetsDto>('http://localhost:8080/assets')
  }
}
