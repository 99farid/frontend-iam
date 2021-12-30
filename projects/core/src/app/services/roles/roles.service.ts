import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteResDataDto } from '../../dto/all-dto-global/delete-res-data-dto';
import { InsertResDto } from '../../dto/all-dto-global/insert-res-dto';
import { UpdateResDto } from '../../dto/all-dto-global/update-res-dto';
import { FindAllResRolesDto } from '../../dto/roles/find-all-res-roles-dto';
import { FindByIdResRolesDto } from '../../dto/roles/find-by-id-res-roles-dto';
import { InsertReqDataRolesDto } from '../../dto/roles/insert-req-data-roles-dto';
import { InsertReqRolesDto } from '../../dto/roles/insert-req-roles-dto';
import { UpdateReqRolesDto } from '../../dto/roles/update-req-roles-dto';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http: HttpClient) { }
  findAllRoles(): Observable<FindAllResRolesDto>  {
      return this.http.get<FindAllResRolesDto>('http://localhost:8080/roles')
  }
  
  findByIdRoles(id: string | null): Observable<FindByIdResRolesDto>{
    return this.http.get<FindByIdResRolesDto>(`http://localhost:8080/roles/${id}`)
  }

  insert(data: InsertReqDataRolesDto): Observable<InsertResDto>{
    return this.http.post<InsertResDto>('http://localhost:8080/roles/', data)
  }

  update(data: UpdateReqRolesDto): Observable<UpdateResDto>{
    return this.http.put<UpdateResDto>('http://localhost:8080/roles/', data)
  }

  delete(id: string): Observable<DeleteResDataDto> {
    return this.http.delete<DeleteResDataDto>(`http://localhost:8080/roles/${id}`)
  }
}