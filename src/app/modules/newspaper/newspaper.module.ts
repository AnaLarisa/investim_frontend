import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewspaperComponent } from './newspaper/newspaper.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    NewspaperComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'newspaper', component: NewspaperComponent}
    ]),
  ]
})
export class NewspaperModule { }
