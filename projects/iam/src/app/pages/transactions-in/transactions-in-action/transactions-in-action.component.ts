import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TransactionsOut } from 'projects/core/src/app/model/transactions-out';
import { TransactionsOutService } from 'projects/core/src/app/services/transactions-out/transactions-out.service';

@Component({
  selector: 'app-transactions-in-action',
  templateUrl: './transactions-in-action.component.html',
  styleUrls: ['./transactions-in-action.component.css']
})
export class TransactionsInActionComponent implements OnInit {
  listTemp : TransactionsOut[] = []
  listTransactionByEmlpoyee : TransactionsOut[] = []
  listTransactionByGeneralItem : TransactionsOut[] = []
  listTransactionByLocation : TransactionsOut[] = []
  isEmployee : boolean = false
  isGeneralItem : boolean = false
  isLocation : boolean = false
  
  valueChange : number = 0;
  constructor(private router : Router, private trascationOutService : TransactionsOutService, 
    private titLeService: Title) {
    titLeService.setTitle('Transaction In')
  }

  ngOnInit(): void {
    this.trascationOutService.findAllFilterByIdEmployee().subscribe(
      result =>{
        this.listTransactionByEmlpoyee = result.data
      }
    )

    this.trascationOutService.findAllFilterByIdGeneralItem().subscribe(
      result =>{
        this.listTransactionByGeneralItem = result.data
      }
    )
    this.trascationOutService.findAllFilterByIdLocation().subscribe(
      result =>{
        this.listTransactionByLocation = result.data
      }
    )
  }

  changeReciever() : void {
    
    console.log(this.valueChange)
    if(this.valueChange == 1){
      this.isEmployee = true
      this.isGeneralItem = false
      this.isLocation = false
    }else if(this.valueChange == 2){
      this.isEmployee = false
      this.isGeneralItem = true
      this.isLocation = false
    } else if(this.valueChange == 3){
      this.isEmployee = false
      this.isGeneralItem = false
      this.isLocation = true
    }
  }
  listOrder() : TransactionsOut[]{
    if(this.isEmployee){
      return this.listTransactionByEmlpoyee
    } else if(this.isGeneralItem){
      return this.listTransactionByGeneralItem
    } else if(this.isEmployee){
      return this.listTransactionByLocation
    }
    return this.listTemp
  }

  toDetail (id :string) : void {
    this.router.navigateByUrl(`/transactions-in/new/detail/${id}`)
  }
}
