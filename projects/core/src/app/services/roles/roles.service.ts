import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FindAllResRolesDto } from '../../dto/roles/find-all-res-roles-dto';
import { FindByIdResRolesDto } from '../../dto/roles/find-by-id-res-roles-dto';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http: HttpClient) { }
  getRole(): Observable<FindAllResRolesDto>  {
      return this.http.get<FindAllResRolesDto>('http://localhost:8080/roles')
  }
  
  getRoleById(id: number): Observable<FindByIdResRolesDto>{
    return this.http.get<FindByIdResRolesDto>(`http://localhost:8080/roles/${id}`)
  }
}
