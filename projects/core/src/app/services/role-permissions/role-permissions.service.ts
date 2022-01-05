import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FindAllResFilterByRoleDto } from '../../dto/role-permissions/find-all-res-filter-by-role-dto';
import { FindAllResRolePermissionsDto } from '../../dto/role-permissions/find-all-res-role-permissions-dto';
import { FindByIdResRolePermissionsDto } from '../../dto/role-permissions/find-by-id-res-role-permissions-dto';

@Injectable({
  providedIn: 'root'
})
export class RolePermissionsService {

  constructor(private http: HttpClient) { }

  findAllRolePermissions(): Observable<FindAllResRolePermissionsDto> {
    return this.http.get<FindAllResRolePermissionsDto>('http://localhost:8080/role-permissions')
  }

  findByIdRolePermissions(id: string): Observable<FindByIdResRolePermissionsDto> {
    return this.http.get<FindByIdResRolePermissionsDto>(`http://localhost:8080/role-permissions/${id}`)
  }

  findAllFilterByRole(id: string): Observable<FindAllResFilterByRoleDto> {
    return this.http.get<FindAllResFilterByRoleDto>(`http://localhost:8080/role-permissions/role?q=${id}`)
  }

  findAllFilterByRoleCode(code: string | undefined): Observable<FindAllResFilterByRoleDto> {
    return this.http.get<FindAllResFilterByRoleDto>(`http://localhost:8080/role-permissions/role-code?q=${code}`)
  }
}
