import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http'
import { Observable, tap } from 'rxjs'
import { ToastrService } from 'ngx-toastr'
import { AuthenticationService } from './authentication/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private toastr: ToastrService, private authenticationService: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string | undefined = this.authenticationService.getToken()
    const newReq = req.clone({ setHeaders: { 'Authorization': `Bearer ${token}` } })

    return next.handle(newReq).pipe(tap({
      next: (successed: any) => {
        let data: HttpResponse<any> = successed
        if (data.body && data.body.msg) {
          this.toastr.success(data.body.msg)
          console.log(successed)
        }
      },
      error: (err) => {
        let data: HttpErrorResponse = err
        this.toastr.error(data.error.msg, 'Error')
      }
    }))
  }
}
