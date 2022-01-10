import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'
import { Observable, takeLast, tap } from 'rxjs'
import { ToastrService } from 'ngx-toastr'
import { AuthenticationService } from './authentication/authentication.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LoadingService } from './loading/loading.service';


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  countLoading : number = 0;
  constructor(private toastr: ToastrService, private authenticationService: AuthenticationService,
    private activatedRoute:ActivatedRoute, private router:Router, private loadingService : LoadingService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string | undefined = this.authenticationService.getToken()
    const newReq = req.clone({ setHeaders: { 'Authorization': `Bearer ${token}` } })
    
    return next.handle(newReq).pipe(
    tap( 
      {
      next: (successed: any) => {
        let data: HttpResponse<any> = successed
        if (data.body && data.body.msg) {
          this.toastr.success(data.body.msg)
          console.log(successed)
        }
        this.loadingProcess(false)
      },
      error: (err) => {
        let data: HttpErrorResponse = err
        if(data.status == 401){
          if(this.router.routerState.snapshot.url == '/login'){
            this.toastr.error(data.error.msg, 'Error')
          }else{
            this.router.navigateByUrl('/login')
          }
        }else{
          this.toastr.error(data.error.msg, 'Error')
        }
        this.loadingProcess(false)
      }
    }) )
  }

  loadingProcess(isShow: boolean) : void{
    if (isShow) {
      this.countLoading++;
      this.loadingService.changeLoadingStatus(true)
    } else {
      this.countLoading--;
      if (this.countLoading < 1) {
        this.loadingService.changeLoadingStatus(false)
      }
    }
  }
}
