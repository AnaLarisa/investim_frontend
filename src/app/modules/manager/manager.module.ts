import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager/manager.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    ManagerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'manager', component: ManagerComponent}
    ]),
  ]
})
export class ManagerModule { }
