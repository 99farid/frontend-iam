import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetItemResTotalPriceDto } from '../../dto/items/get-item-res-total-price-dto';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http : HttpClient) { }

  getTotalPrice(): Observable<GetItemResTotalPriceDto>{
    return this.http.get<GetItemResTotalPriceDto>('http://localhost:8080/items/total')
  }
}