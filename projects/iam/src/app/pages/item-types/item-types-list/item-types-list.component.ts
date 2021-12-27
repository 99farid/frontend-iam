import { Component, OnInit } from '@angular/core';
import { FindAllResConditionAssetsDto } from 'projects/core/src/app/dto/condition-assets/find-all-res-condition-assets-dto';
import { FindAllResItemTypesDto } from 'projects/core/src/app/dto/item-types/find-all-res-item-types-dto';
import { ItemTypes } from 'projects/core/src/app/model/item-types';
import { ItemTypesService } from 'projects/core/src/app/services/item-types/item-types.service';

@Component({
  selector: 'app-item-types-list',
  templateUrl: './item-types-list.component.html',
  styleUrls: ['./item-types-list.component.css']
})
export class ItemTypesListComponent implements OnInit {
  listItemTypes : ItemTypes[] = []
  constructor(private typesService : ItemTypesService) { }

  ngOnInit(): void {
    this.typesService.findAll().subscribe({
      next : result=>{
        let conditionResult : FindAllResItemTypesDto = result
        this.listItemTypes = conditionResult.data
      }
    })
  }

}
