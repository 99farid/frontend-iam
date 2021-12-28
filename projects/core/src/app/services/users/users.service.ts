import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsertResDataDto } from '../../dto/all-dto-global/insert-res-data-dto';
import { FindAllResUsersDto } from '../../dto/users/find-all-res-users-dto';
import { FindByIdResUsersDto } from '../../dto/users/find-by-id-res-users-dto';
import { Users } from '../../model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  findAllUsers(): Observable<FindAllResUsersDto> {
    return this.http.get<FindAllResUsersDto>('http://localhost:8080/users')
  }

  findByIdCompanies(id: number): Observable<FindByIdResUsersDto> {
    return this.http.get<FindByIdResUsersDto>(`http://localhost:8080/users/:${id}`)
  }

  insert(dataAll: Users): Observable<InsertResDataDto> {
    return this.http.post<InsertResDataDto>('http://localhost:8080/users/', dataAll)
  }
}
