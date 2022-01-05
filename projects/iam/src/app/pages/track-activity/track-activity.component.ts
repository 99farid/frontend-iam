import { Component, OnDestroy, OnInit } from '@angular/core';
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

  constructor(private router: Router, private authService: AuthenticationService,
    private trackActivityService: TrackActivityService) { }

  ngOnInit(): void {

    this.allDataTrack = new FindAllResTrackActivityDto()
    this.trackActivityService.findAllTrack().subscribe(result => {
      this.allDataTrack = result
      this.listTrack = this.allDataTrack.data
    })
  }

  clickBack(){
    this.router.navigateByUrl('/dashboard')
  }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }

}