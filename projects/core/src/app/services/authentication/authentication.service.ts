import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginReqDto } from '../../dto/login/login-req-dto';
import { LoginResDto } from '../../dto/login/login-res-dto';
import { RolePermissions } from '../../model/role-permissions';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }
  login(loginEmailAndPass: LoginReqDto): Observable<LoginResDto> {
    return this.http.post<LoginResDto>("http://localhost:8080/login", loginEmailAndPass)
  }

  saveUserData(data: LoginResDto): void {
    localStorage.setItem('data', JSON.stringify(data))
  }

  savePermission(data: RolePermissions[]): void {
    localStorage.setItem('permission', JSON.stringify(data))
  }

  getPermission() : RolePermissions[] | undefined{
    const data = localStorage.getItem('permission')
    let result : RolePermissions[]
    if (data) {
      result = JSON.parse(data)
      if (result) {
        return result
      }
    }
    return undefined
  }

  getToken(): string | undefined {
    let data = localStorage.getItem('data')
    let result: LoginResDto
    if (data) {
      result = JSON.parse(data)
      if (result.token) {
        return result.token
      }
    }
    return undefined
  }

  getRoleCode(): string | undefined {
    let data = localStorage.getItem('data')
    let result: LoginResDto
    if (data) {
      result = JSON.parse(data)
      if (result.roleCode) {
        return result.roleCode
      }
    }
    return undefined
  }

  clearStorage(): void {
    localStorage.clear()
  }
}
