import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FindByIdResInvoicesDto } from 'projects/core/src/app/dto/invoices/find-by-id-res-invoices-dto';
import { Invoices } from 'projects/core/src/app/model/invoices';
import { InvoicesService } from 'projects/core/src/app/services/invoices/invoices.service';

@Component({
  selector: 'app-invoices-action',
  templateUrl: './invoices-action.component.html',
  styleUrls: ['./invoices-action.component.css']
})
export class InvoicesActionComponent implements OnInit {
  isDisabled : boolean = false
  dataInsert : Invoices = new Invoices()
  dataUpdate : Invoices = new Invoices()
  filePict! : File | null
  selectedFile! : FileList

  formData : FormData = new FormData();
   
  constructor(private invoiceService : InvoicesService, private activatedRoute: ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    if(this.activatedRoute.snapshot.paramMap.get('id')){
      this.invoiceService.findById(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(
        result=> {
          const typeResult : FindByIdResInvoicesDto = result
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

  onChange(event : any) : void{
    this.selectedFile = event.target.files
    if(this.selectedFile){
      this.filePict = this.selectedFile.item(0)
      this.formData.append('data', JSON.stringify(this.dataInsert))
    }
    if(this.filePict){
      this.formData.append('invoicePict', this.filePict)
    }
  }

  submit(): void {
    if (this.dataInsert.id) {
      console.log(this.formData)
      this.invoiceService.update(this.formData).subscribe({next :result=>{
        this.router.navigateByUrl('/invoices')
      }
    })
    } else {
      console.log(this.formData)
      this.invoiceService.insert(this.formData).subscribe({next :result=>{
        this.router.navigateByUrl('/invoices')
      }
    })
    }
  }
}