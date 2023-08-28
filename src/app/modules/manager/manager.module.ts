import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager/manager.component';
import {RouterModule} from "@angular/router";
import {MatDividerModule} from "@angular/material/divider";



@NgModule({
  declarations: [
    ManagerComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: 'manager', component: ManagerComponent}
        ]),
        MatDividerModule,
    ]
})
export class ManagerModule { }
