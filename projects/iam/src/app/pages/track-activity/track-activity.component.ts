import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-track-activity',
  templateUrl: './track-activity.component.html',
  styleUrls: ['./track-activity.component.css']
})
export class TrackActivityComponent implements OnInit, OnDestroy {

  private obs?: Subscription

  listTrack: TrackActivity[] = []

  constructor(private router: Router) { }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }

  ngOnInit(): void {
    const ta1 = new TrackActivity()
    ta1.number = 1
    ta1.code = "TA1"
    ta1.assetName = "Laptop"
    ta1.statusName = "Deployable"
    ta1.activity = "Insert Asset"
    ta1.codeTrans = "TRX1"
    ta1.dateActivity = "06-12-2021"
    this.listTrack.push(ta1)

    const ta2 = new TrackActivity()
    ta2.number = 2
    ta2.code = "TA2"
    ta2.assetName = "Laptop"
    ta2.statusName = "Deployable"
    ta2.activity = "Insert Asset"
    ta2.codeTrans = "TRX2"
    ta2.dateActivity = "06-12-2021"
    this.listTrack.push(ta2)

    const ta3 = new TrackActivity()
    ta3.number = 3
    ta3.code = "TA3"
    ta3.assetName = "Laptop"
    ta3.statusName = "Deployable"
    ta3.activity = "Insert Asset"
    ta3.codeTrans = "TRX3"
    ta3.dateActivity = "06-12-2021"
    this.listTrack.push(ta3)
  }

  clickBack(){
    this.router.navigateByUrl('/dashboard')
  }

}

class TrackActivity {
  number?: number
  code?: string
  assetName?: string
  statusName?: string
  activity?: string
  codeTrans?: string
  dateActivity?: string
}