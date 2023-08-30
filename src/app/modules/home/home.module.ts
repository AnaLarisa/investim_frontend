import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from "./home-page/home-page.component";
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: HomePageComponent}
    ]),
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
  ]
})
export class HomeModule { }
