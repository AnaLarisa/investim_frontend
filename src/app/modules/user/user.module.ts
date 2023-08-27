import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import {RouterModule} from "@angular/router";
import {MatTabsModule} from "@angular/material/tabs";
import {PersonalStatisticsComponent} from "./personal-statistics/personal-statistics.component";
import {AccountInfoComponent} from "./account-info/account-info.component";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    UserComponent,
    PersonalStatisticsComponent,
    AccountInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'user', component: UserComponent}
    ]),
    MatTabsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
  ]
})
export class UserModule { }
