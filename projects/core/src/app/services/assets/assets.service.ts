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

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  constructor(private http : HttpClient) { }

  insert(data : InsertReqAssetDto, display : File | null, invoicePict : File | null) : Observable<InsertResDto>{
    const formData : FormData = new FormData()
    formData.append('data',JSON.stringify(data))
    if(display)
      formData.append('display', display)
    if(invoicePict)
      formData.append('invoicePict',invoicePict)
    return this.http.post<InsertResDto>('http://localhost:8080/assets', formData)
  }

  update(data : Assets, display : File | null) : Observable<UpdateResDto>{
    console.log(data)
    const formData : FormData = new FormData()
    formData.append('data', JSON.stringify(data))
    if(display)
      formData.append('display', display)
    return this.http.put<UpdateResDto>('http://localhost:8080/assets', formData)
  }

  insertExcel(data : FormData) : Observable<InsertResDto>{
    return this.http.post<InsertResDto>('http://localhost:8080/assets/excel', data)
  }

  findAll() : Observable<FindAllResAssetsDto>{
    return this.http.get<FindAllResAssetsDto>('http://localhost:8080/assets')
  }
  findById(id : string | null) : Observable<FindByIdResAssetsDto>{
    return this.http.get<FindByIdResAssetsDto>(`http://localhost:8080/assets/${id}`)
  }

  
}
