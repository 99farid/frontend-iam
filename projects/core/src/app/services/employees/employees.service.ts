import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteResDataDto } from '../../dto/all-dto-global/delete-res-data-dto';
import { InsertResDataDto } from '../../dto/all-dto-global/insert-res-data-dto';
import { InsertResDto } from '../../dto/all-dto-global/insert-res-dto';
import { UpdateResDto } from '../../dto/all-dto-global/update-res-dto';
import { FindAllResEmployeesDto } from '../../dto/employees/find-all-res-employees-dto';
import { FindByIdResEmployeesDto } from '../../dto/employees/find-by-id-res-employees-dto';
import { FindByResNipDto } from '../../dto/employees/find-by-res-nip-dto';
import { Employees } from '../../model/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { }

  findAllEmployees(): Observable<FindAllResEmployeesDto> {
    return this.http.get<FindAllResEmployeesDto>('http://localhost:8080/employees')
  }

  findByIdEmployees(id: string | null): Observable<FindByIdResEmployeesDto> {
    return this.http.get<FindByIdResEmployeesDto>(`http://localhost:8080/employees/:${id}`)
  }

  findByNip(nip: string | null): Observable<FindByResNipDto> {
    return this.http.get<FindByResNipDto>(`http://localhost:8080/employees/nip?q=${nip}`)
  }

  insert(data: Employees): Observable<InsertResDto> {
    return this.http.post<InsertResDto>('http://localhost:8080/employees/', data)
  }
  insertExcel(data: FormData): Observable<InsertResDto> {
    return this.http.post<InsertResDto>('http://localhost:8080/employees/excel', data)
  }

  update(data: Employees): Observable<UpdateResDto> {
    return this.http.put<UpdateResDto>('http://localhost:8080/employees/', data)
  }

  delete(id: string): Observable<DeleteResDataDto> {
    return this.http.delete<DeleteResDataDto>(`http://localhost:8080/employees/${id}`)
  }
}