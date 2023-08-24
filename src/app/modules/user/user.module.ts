import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'user', component: UserComponent}
    ]),
  ]
})
export class UserModule { }
