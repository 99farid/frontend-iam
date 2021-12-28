import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteResDataDto } from '../../dto/all-dto-global/delete-res-data-dto';
import { InsertResDto } from '../../dto/all-dto-global/insert-res-dto';
import { UpdateResDto } from '../../dto/all-dto-global/update-res-dto';
import { FindAllResLocationsDto } from '../../dto/locations/find-all-res-locations-dto';
import { FindByIdResLocationsDto } from '../../dto/locations/find-by-id-res-locations-dto';
import { Locations } from '../../model/locations';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http : HttpClient) { }

  findAll() : Observable<FindAllResLocationsDto>{
    return this.http.get<FindAllResLocationsDto>('http://localhost:8080/locations')
  }

  findById(id : string | null) : Observable<FindByIdResLocationsDto>{
    return this.http.get<FindByIdResLocationsDto>(`http://localhost:8080/locations/${id}`)
  }

  insert(data : Locations) : Observable<InsertResDto>{
    return this.http.post<InsertResDto>(`http://localhost:8080/locations`,data)
  }

  update(data : Locations) : Observable<UpdateResDto>{
    return this.http.put<UpdateResDto>(`http://localhost:8080/locations`,data)
  }

  delete(id : string | null) : Observable<DeleteResDataDto>{
    return this.http.delete<DeleteResDataDto>(`http://localhost:8080/locations/${id}`)
  }
}
