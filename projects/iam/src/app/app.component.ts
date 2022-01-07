import { Component, OnInit } from '@angular/core';
import { HttpInterceptorService } from 'projects/core/src/app/services/http-interceptor.service';
import { LoadingService } from 'projects/core/src/app/services/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'iam';
  loading : boolean = false
  primaryColour : string = ''
  secondaryColour : string = ''
  constructor (public loadingService : LoadingService) {}
  ngOnInit(): void {
    this.loadingService.loading$?.subscribe(
      result=> this.loading = result??false
    )
  }
  
}
