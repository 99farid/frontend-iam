import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FindByIdResItemTypesDto } from 'projects/core/src/app/dto/item-types/find-by-id-res-item-types-dto';
import { ItemTypes } from 'projects/core/src/app/model/item-types';
import { ItemTypesService } from 'projects/core/src/app/services/item-types/item-types.service';

@Component({
  selector: 'app-item-types-action',
  templateUrl: './item-types-action.component.html',
  styleUrls: ['./item-types-action.component.css']
})
export class ItemTypesActionComponent implements OnInit {
  isDisabled: boolean = false
  dataInsert: ItemTypes = new ItemTypes()
  dataUpdate: ItemTypes = new ItemTypes()

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private itemTypeService: ItemTypesService, private titLeService: Title) {
    titLeService.setTitle('Item Type Form')
  }

  ngOnInit(): void {
    if (this.activatedRoute.snapshot.paramMap.get('id')) {
      this.itemTypeService.findById(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(
        result => {
          const typeResult: FindByIdResItemTypesDto = result
          this.dataUpdate = typeResult.data
          this.isDisabled = true

          this.dataInsert.id = this.dataUpdate.id
          this.dataInsert.code = this.dataUpdate.code
          this.dataInsert.version = this.dataUpdate.version
          this.dataInsert.createdBy = this.dataUpdate.createdBy
          this.dataInsert.createdDate = this.dataUpdate.createdDate
        }
      )
    }

  }

  submit(): void {
    if (this.dataInsert.id) {
      this.itemTypeService.update(this.dataInsert).subscribe({
        next: result => {
          this.router.navigateByUrl('/item-types-list')
        }
      })
    } else {
      this.itemTypeService.insert(this.dataInsert).subscribe({
        next: result => {
          this.router.navigateByUrl('/item-types-list')
        }
      })
    }
  }

  clickBack(): void {
    this.router.navigateByUrl('/item-types')
  }
}
