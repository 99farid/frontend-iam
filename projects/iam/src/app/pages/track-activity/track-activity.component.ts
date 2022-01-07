import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FindAllResTrackActivityDto } from 'projects/core/src/app/dto/track-activity/find-all-res-track-activity-dto';
import { TrackActivity } from 'projects/core/src/app/model/track-activity';
import { AuthenticationService } from 'projects/core/src/app/services/authentication/authentication.service';
import { TrackActivityService } from 'projects/core/src/app/services/track-activity/track-activity.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-track-activity',
  templateUrl: './track-activity.component.html',
  styleUrls: ['./track-activity.component.css']
})
export class TrackActivityComponent implements OnInit, OnDestroy {

  allDataTrack?: FindAllResTrackActivityDto

  private obs?: Subscription

  listTrack: TrackActivity[] = []

  constructor(private authService: AuthenticationService, private router: Router, 
    private trackActivityService: TrackActivityService,
    private titLeService: Title) {
    titLeService.setTitle('Track Activity')
  }

  ngOnInit(): void {

    this.allDataTrack = new FindAllResTrackActivityDto()
    this.trackActivityService.findAllTrack().subscribe(result => {
      this.allDataTrack = result
      this.listTrack = this.allDataTrack.data
    })
  }

  clickBack() {
    this.router.navigateByUrl('/dashboard')
  }

  downloadPdf(): void {
    this.trackActivityService.findAllForPdf().subscribe(
      result => { })
  }

  sendPdf(): void {
    this.trackActivityService.sendFileToEmail().subscribe(
      result => { })
  }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }

}