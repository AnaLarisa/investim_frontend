import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewspaperComponent } from './newspaper/newspaper.component';
import {RouterModule} from "@angular/router";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    NewspaperComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'newspaper', component: NewspaperComponent}
    ]),
    MatListModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class NewspaperModule { }
