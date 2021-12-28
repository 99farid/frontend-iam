import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteResDataDto } from '../../dto/all-dto-global/delete-res-data-dto';
import { InsertResDto } from '../../dto/all-dto-global/insert-res-dto';
import { UpdateResDto } from '../../dto/all-dto-global/update-res-dto';
import { FindAllResPemissionsDto } from '../../dto/permissions/find-all-res-pemissions-dto';
import { FindByIdResPermissionsDto } from '../../dto/permissions/find-by-id-res-permissions-dto';
import { Permissions } from '../../model/permissions';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  constructor(private http: HttpClient) { }

  findAllPermissions(): Observable<FindAllResPemissionsDto> {
    return this.http.get<FindAllResPemissionsDto>('http://localhost:8080/permissions')
  }

  findByIdPermissions(id: string | null): Observable<FindByIdResPermissionsDto> {
    return this.http.get<FindByIdResPermissionsDto>(`http://localhost:8080/permissions/${id}`)
  }

  insert(data: Permissions): Observable<InsertResDto> {
    return this.http.post<InsertResDto>('http://localhost:8080/permissions/', data)
  }

  update(data: Permissions): Observable<UpdateResDto> {
    return this.http.put<UpdateResDto>('http://localhost:8080/permissions/', data)
  }

  delete(id: string): Observable<DeleteResDataDto> {
    return this.http.delete<DeleteResDataDto>(`http://localhost:8080/permissions/${id}`)
  }
}