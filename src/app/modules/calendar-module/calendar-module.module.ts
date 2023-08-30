import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { FullCalendarModule } from '@fullcalendar/angular';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {RouterModule} from "@angular/router";
import { AddEventDialogComponent } from './dialogs/add-event-dialog/add-event-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {MatSelectModule} from "@angular/material/select";
import { DisplayEventDialogComponent } from './dialogs/display-event-dialog/display-event-dialog.component';

@NgModule({
  declarations: [CalendarComponent, CalendarPageComponent, AddEventDialogComponent, DisplayEventDialogComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    RouterModule.forChild([
      {path: 'calendar', component: CalendarPageComponent}
    ]),
    MatCardModule, // Add MatCardModule here
    MatButtonModule, // Add MatButtonModule here
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatInputModule,
    NgxMaterialTimepickerModule,
    MatSelectModule
  ],
  exports: [
    CalendarPageComponent
  ]
})
export class CalendarModule {}
