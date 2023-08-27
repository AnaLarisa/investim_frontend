import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from "./home-page/home-page.component";
import {RouterModule} from "@angular/router";
import {GoalsComponent} from "./goals/goals.component";



@NgModule({
  declarations: [HomePageComponent, GoalsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: HomePageComponent}
    ]),
  ]
})
export class HomeModule { }
