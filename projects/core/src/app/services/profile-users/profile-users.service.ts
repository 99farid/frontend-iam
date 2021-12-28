import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsertResDataDto } from '../../dto/all-dto-global/insert-res-data-dto';
import { FindAllResProfileUsersDto } from '../../dto/profile-users/find-all-res-profile-users-dto';
import { FindByIdResProfileUsersDto } from '../../dto/profile-users/find-by-id-res-profile-users-dto';
import { InsertReqDataProfileUsersDto } from '../../dto/profile-users/insert-res-data-profile-users-dto';

@Injectable({
  providedIn: 'root'
})
export class ProfileUsersService {

  constructor(private http: HttpClient) { }

  findAllProfile(): Observable<FindAllResProfileUsersDto> {
    return this.http.get<FindAllResProfileUsersDto>('http://localhost:8080/profile-users')
  }

  findByIdProfile(id: number): Observable<FindByIdResProfileUsersDto> {
    return this.http.get<FindByIdResProfileUsersDto>(`http://localhost:8080/profile-users/${id}`)
  }

  insert(data: InsertReqDataProfileUsersDto): Observable<InsertResDataDto> {
    return this.http.post<InsertResDataDto>('http://localhost:8080/profile-users/', data)
  }
}
