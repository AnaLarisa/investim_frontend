import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccountInfoComponent} from "./account-info.component";
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [AccountInfoComponent],
  exports: [
    AccountInfoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    NgxMaterialTimepickerModule,
    ReactiveFormsModule
  ]
})
export class AccountInfoModule { }
