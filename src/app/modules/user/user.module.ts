import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import {RouterModule} from "@angular/router";
import {MatTabsModule} from "@angular/material/tabs";
import {PersonalStatisticsModule} from "../../components/shared/personal-statistics/personal-statistics.module";
import {AccountInfoModule} from "../../components/shared/account-info/account-info.module";



@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'user', component: UserComponent}
    ]),
    MatTabsModule,
    PersonalStatisticsModule,
    AccountInfoModule,
  ]
})
export class UserModule { }
