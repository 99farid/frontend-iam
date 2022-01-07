import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Assets } from 'projects/core/src/app/model/assets';
import { Files } from 'projects/core/src/app/model/files';
import { AssetsService } from 'projects/core/src/app/services/assets/assets.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  asset : Assets = new Assets();
  id : string | null = this.activatedRoute.snapshot.paramMap.get('id')
  isUpdate : boolean = false;
  btName : string = "Update"
  selectedDisplay! : FileList
  fileDisplay! : File | null
  constructor(private assetService : AssetsService, private activatedRoute : ActivatedRoute) { }
  
  ngOnInit(): void {
    if(this.id){
      this.assetService.findById(this.id).subscribe(
        result => {
          this.asset = result.data

        }
      )

    }
  }
  isDisplayAvail(data : Files){
    if(data){
      return true
    }else{
      return false
    }
  }
  clickUpdate(){
    this.isUpdate = !this.isUpdate
    if(this.isUpdate){
      this.btName = "Save"
    }else{
      this.btName = "Update"
      this.assetService.update(this.asset, this.fileDisplay).subscribe(
        {
          next : result=>{
            window.location.reload()
          }
        }
      )
    }
  }
  
  inputDisplay(event : any){
    this.selectedDisplay = event.target.files
    if (this.selectedDisplay) {
      this.fileDisplay = this.selectedDisplay.item(0)
    }
  }

}
