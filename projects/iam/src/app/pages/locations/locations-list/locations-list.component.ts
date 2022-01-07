import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { FindAllResLocationsDto } from 'projects/core/src/app/dto/locations/find-all-res-locations-dto';
import { Locations } from 'projects/core/src/app/model/locations';
import { LocationsService } from 'projects/core/src/app/services/locations/locations.service';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css'],
  providers: [ConfirmationService]
})
export class LocationsListComponent implements OnInit {

  listLocation: Locations[] = []

  constructor(private router: Router, private locationService: LocationsService,
    private confirmationService: ConfirmationService, private titLeService: Title) {
    titLeService.setTitle('Location')
  }

  ngOnInit(): void {
    this.initData()
  }

  initData(): void {
    this.locationService.findAll().subscribe({
      next: result => {
        const locationResult: FindAllResLocationsDto = result
        this.listLocation = locationResult.data
      }
    })
  }

  clickCreate(): void {
    this.router.navigateByUrl('locations/new')
  }

  clickUpdate(id: string) {
    this.router.navigateByUrl(`locations/modify/${id}`)
  }

  confirm(id: string): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to Remove?',
      accept: () => {
        this.locationService.delete(id).subscribe({
          next: result => {
            this.initData()
          }
        })
      }
    });
  }

}
