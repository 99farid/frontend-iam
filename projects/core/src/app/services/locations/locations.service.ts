import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FindAllResLocationsDto } from '../../dto/locations/find-all-res-locations-dto';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http : HttpClient) { }

  findAll() : Observable<FindAllResLocationsDto>{
    return this.http.get<FindAllResLocationsDto>('http://localhost:8080/locations')
  }
}
