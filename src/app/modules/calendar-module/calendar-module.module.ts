import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { FullCalendarModule } from '@fullcalendar/angular';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [CalendarComponent, CalendarPageComponent],
  imports: [
    CommonModule,
    FullCalendarModule,
    RouterModule.forChild([
      {path: 'calendar', component: CalendarPageComponent}
    ]),
    MatCardModule, // Add MatCardModule here
    MatButtonModule, // Add MatButtonModule here
  ],
  exports: [
    CalendarPageComponent
  ]
})
export class CalendarModule {}
