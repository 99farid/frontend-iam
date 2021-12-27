import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FindAllResConditionAssetsDto } from '../../dto/condition-assets/find-all-res-condition-assets-dto';

@Injectable({
  providedIn: 'root'
})
export class ConditionAssetsService {

  constructor(private http : HttpClient) { }

  findAll() : Observable<FindAllResConditionAssetsDto>{
    return this.http.get<FindAllResConditionAssetsDto>('http://localhost:8080/condition-assets')
  }
}
