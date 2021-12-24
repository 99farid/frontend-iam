import { Component, OnInit } from '@angular/core';
import { Assets } from 'projects/core/src/app/model/assets';
import { Select2OptionData } from 'ng-select2';
import { Options } from 'select2';

@Component({
  selector: 'app-assets-action',
  templateUrl: './assets-action.component.html',
  styleUrls: ['./assets-action.component.css']
})
export class AssetsActionComponent implements OnInit {
  // listAssets !: Assets[]
  // options! : Options;
  constructor() { }

  ngOnInit(): void {
  
  }
  
}
