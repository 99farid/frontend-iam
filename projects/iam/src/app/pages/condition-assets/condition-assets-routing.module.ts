import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConditionAssetsActionComponent } from './condition-assets-action/condition-assets-action.component';
import { ConditionAssetsListComponent } from './condition-assets-list/condition-assets-list.component';

const routes : Routes = [
  {
    path: 'conditon-assets-action/new',
    component: ConditionAssetsActionComponent
  },
  {
    path: 'conditon-assets-action/:id',
    component: ConditionAssetsActionComponent
  },
  {
    path: 'conditon-assets-list',
    component : ConditionAssetsListComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ConditionAssetsRoutingModule { }
