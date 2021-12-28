import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FindAllResLocationsDto } from 'projects/core/src/app/dto/locations/find-all-res-locations-dto';
import { Locations } from 'projects/core/src/app/model/locations';
import { LocationsService } from 'projects/core/src/app/services/locations/locations.service';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent implements OnInit {
  listLocations : Locations[] = []
  constructor(private locationService : LocationsService, private router : Router) { }

  ngOnInit(): void {
    this.locationService.findAll().subscribe({
      next : result=>{
        const locationResult : FindAllResLocationsDto = result
        this.listLocations = locationResult.data 
      }
    })
  }

  clickCreate():void{
    this.router.navigateByUrl('location-action/new')
  }
  clickUpdate(id : string){
    this.router.navigateByUrl(`location-action/${id}`)
  }
  clickDelete(id : string){
    this.locationService.delete(id).subscribe(
      result =>{
        window.location.reload()
      }
    )
  }

}
