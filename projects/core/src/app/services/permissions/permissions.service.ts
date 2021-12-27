import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsertResDataDto } from '../../dto/all-dto-global/insert-res-data-dto';
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

  findByIdCompanies(id: number): Observable<FindByIdResPermissionsDto> {
    return this.http.get<FindByIdResPermissionsDto>(`http://localhost:8080/permissions/:${id}`)
  }

  insert(dataAll: Permissions): Observable<InsertResDataDto> {
    return this.http.post<InsertResDataDto>('http://localhost:8080/permissions/', dataAll)
  }
}
