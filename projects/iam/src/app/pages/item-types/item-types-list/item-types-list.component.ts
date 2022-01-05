import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { FindAllResConditionAssetsDto } from 'projects/core/src/app/dto/condition-assets/find-all-res-condition-assets-dto';
import { FindAllResItemTypesDto } from 'projects/core/src/app/dto/item-types/find-all-res-item-types-dto';
import { ItemTypes } from 'projects/core/src/app/model/item-types';
import { ItemTypesService } from 'projects/core/src/app/services/item-types/item-types.service';

@Component({
  selector: 'app-item-types-list',
  templateUrl: './item-types-list.component.html',
  styleUrls: ['./item-types-list.component.css'],
  providers: [ConfirmationService]
})
export class ItemTypesListComponent implements OnInit {

  listItemTypes: ItemTypes[] = []

  constructor(private router: Router, private typesService: ItemTypesService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.initData()
  }

  initData(): void {
    this.typesService.findAll().subscribe({
      next : result=>{
        let conditionResult : FindAllResItemTypesDto = result
        this.listItemTypes = conditionResult.data
        
      }
    })
  }

  clickCreate(): void {
    this.router.navigateByUrl('/item-types/new')
  }

  clickUpdate(id: string): void {
    this.router.navigateByUrl(`/item-types/modify/${id}`)
  }

  confirm(id: string): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to Remove?',
      accept: () => {
        this.typesService.delete(id).subscribe({
          next: result => {
            this.initData()
          }
        })
      }
    });
  }
}