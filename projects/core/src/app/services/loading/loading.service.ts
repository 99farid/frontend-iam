import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { HttpInterceptorService } from '../http-interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading ?: Observer<boolean | null> 
  loading$? : Observable<boolean | null>
  constructor() {
    this.loading$ = new Observable<boolean|null>(
      obs => this.loading = obs
    )
   }

  changeLoadingStatus(status : boolean | null){
    this.loading?.next(status)
  }
}
