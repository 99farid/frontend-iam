import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteResDataDto } from '../../dto/all-dto-global/delete-res-data-dto';
import { InsertResDto } from '../../dto/all-dto-global/insert-res-dto';
import { UpdateResDto } from '../../dto/all-dto-global/update-res-dto';
import { FindAllResUsersDto } from '../../dto/users/find-all-res-users-dto';
import { FindByIdResUsersDto } from '../../dto/users/find-by-id-res-users-dto';
import { FindByResEmailDto } from '../../dto/users/find-by-res-email-dto ';
import { Users } from '../../model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  findAllUsers(): Observable<FindAllResUsersDto> {
    return this.http.get<FindAllResUsersDto>('http://localhost:8080/users')
  }

  findByIdUsers(id: string | null): Observable<FindByIdResUsersDto> {
    return this.http.get<FindByIdResUsersDto>(`http://localhost:8080/users/${id}`)
  }
  
  findByEmail(email: string | null): Observable<FindByResEmailDto> {
    return this.http.get<FindByResEmailDto>(`http://localhost:8080/users/${email}`)
  }

  insert(data: Users): Observable<InsertResDto> {
    return this.http.post<InsertResDto>('http://localhost:8080/users/', data)
  }

  update(data: Users): Observable<UpdateResDto> {
    return this.http.put<UpdateResDto>('http://localhost:8080/users/', data)
  }

  updatePassword(pass: string): Observable<UpdateResDto> {
    return this.http.patch<UpdateResDto>('http://localhost:8080/users/', pass)
  }

  delete(id: string): Observable<DeleteResDataDto> {
    return this.http.delete<DeleteResDataDto>(`http://localhost:8080/users/${id}`)
  }
}
