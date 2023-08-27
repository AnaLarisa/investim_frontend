import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PersonalStatisticsComponent} from "./personal-statistics.component";



@NgModule({
  declarations: [PersonalStatisticsComponent],
  exports: [
    PersonalStatisticsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PersonalStatisticsModule { }
