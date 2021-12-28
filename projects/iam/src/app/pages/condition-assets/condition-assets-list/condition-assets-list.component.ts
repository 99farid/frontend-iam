import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FindAllResConditionAssetsDto } from 'projects/core/src/app/dto/condition-assets/find-all-res-condition-assets-dto';
import { ConditionAssets } from 'projects/core/src/app/model/condition-assets';
import { ConditionAssetsService } from 'projects/core/src/app/services/condition-assets/condition-assets.service';
@Component({
  selector: 'app-condition-assets-list',
  templateUrl: './condition-assets-list.component.html',
  styleUrls: ['./condition-assets-list.component.css']
})
export class ConditionAssetsListComponent implements OnInit {
  listConditionAssets : ConditionAssets[] = [] 

  constructor(private conditionService : ConditionAssetsService, private router : Router) { }

  ngOnInit(): void {
    this.conditionService.findAll().subscribe({
      next : result=> {
        let conditionResult : FindAllResConditionAssetsDto = result
        this.listConditionAssets = conditionResult.data
      }
    })
  }

  clickCreate() : void{
    this.router.navigateByUrl('/condition-assets-action/new')
  }

  clickUpdate(id : string) : void{
    this.router.navigateByUrl(`/condition-assets-action/${id}`)
  }

  clickDelete(id : string) : void{
    this.conditionService.delete(id).subscribe(
      result =>{
        window.location.reload()
      }
    )
  }

}
