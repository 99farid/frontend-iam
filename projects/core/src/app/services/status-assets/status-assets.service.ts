import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FindAllResStatusAssetsDto } from '../../dto/status-assets/find-all-res-status-assets-dto';

@Injectable({
  providedIn: 'root'
})
export class StatusAssetsService {

  constructor(private http : HttpClient) { }

  findAll() : Observable<FindAllResStatusAssetsDto>{
    return this.http.get<FindAllResStatusAssetsDto>('http://localhost:8080/status-assets')
  }
}
