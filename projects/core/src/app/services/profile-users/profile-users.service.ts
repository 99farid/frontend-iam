import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsertResDto } from '../../dto/all-dto-global/insert-res-dto';
import { UpdateResDto } from '../../dto/all-dto-global/update-res-dto';
import { FindAllResProfileUsersDto } from '../../dto/profile-users/find-all-res-profile-users-dto';
import { FindByIdResProfileUsersDto } from '../../dto/profile-users/find-by-id-res-profile-users-dto';
import { FindByResUserIdDto } from '../../dto/profile-users/find-by-res-user-id-dto';
import { InsertReqDataProfileUsersDto } from '../../dto/profile-users/insert-res-data-profile-users-dto';
import { ProfileUsers } from '../../model/profile-users';

@Injectable({
  providedIn: 'root'
})
export class ProfileUsersService {

  constructor(private http: HttpClient) { }

  findAllProfile(): Observable<FindAllResProfileUsersDto> {
    return this.http.get<FindAllResProfileUsersDto>('http://localhost:8080/profile-users')
  }

  findByIdProfile(id: string | null): Observable<FindByIdResProfileUsersDto> {
    return this.http.get<FindByIdResProfileUsersDto>(`http://localhost:8080/profile-users/${id}`)
  }

  findByUserId(): Observable<FindByResUserIdDto> {
    return this.http.get<FindByResUserIdDto>(`http://localhost:8080/profile-users/user`)
  }

  insert(data: InsertReqDataProfileUsersDto, file: File): Observable<InsertResDto> {
    const formData: FormData = new FormData()
    formData.append('data', JSON.stringify(data))
    formData.append('file', file)
    return this.http.post<InsertResDto>('http://localhost:8080/profile-users/', formData)
  }
  
  update(data: ProfileUsers, file: File): Observable<UpdateResDto> {
    const upFormData: FormData = new FormData()
    upFormData.append('data', JSON.stringify(data))
    upFormData.append('file', file)
    return this.http.put<UpdateResDto>('http://localhost:8080/profile-users/', upFormData)
  }
  
}
