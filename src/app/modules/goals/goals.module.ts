import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsComponent } from './goals/goals.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    GoalsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'goals', component: GoalsComponent}
    ]),
  ]
})
export class GoalsModule { }
