import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FindAllResStatusAssetsDto } from 'projects/core/src/app/dto/status-assets/find-all-res-status-assets-dto';
import { StatusAssets } from 'projects/core/src/app/model/status-assets';
import { StatusAssetsService } from 'projects/core/src/app/services/status-assets/status-assets.service';

@Component({
  selector: 'app-status-assets-list',
  templateUrl: './status-assets-list.component.html',
  styleUrls: ['./status-assets-list.component.css']
})
export class StatusAssetsListComponent implements OnInit {
  listStatus : StatusAssets[] = []
  constructor(private statusService : StatusAssetsService, private router : Router) { }

  ngOnInit(): void {
    this.statusService.findAll().subscribe({
      next : result => {
        const statusResult : FindAllResStatusAssetsDto = result
        this.listStatus = statusResult.data; 
      }
    })
  }
  clickCreate() : void{
    this.router.navigateByUrl(`/status-assets-action/new`)
  }
  clickUpdate(id:string){
    this.router.navigateByUrl(`/status-assets-action/${id}`)
  }
  clickDelete(id : string){
    this.statusService.delete(id).subscribe(
      result =>{
        window.location.reload()
      }
    )
  }

}
