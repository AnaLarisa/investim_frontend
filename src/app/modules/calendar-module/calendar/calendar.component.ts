import {Component, inject} from '@angular/core';
import {CalendarOptions, DateSelectArg} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {MatDialog} from "@angular/material/dialog";
import {AddEventDialogComponent} from "../dialogs/add-event-dialog/add-event-dialog.component";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: ''
    },
    plugins: [
      dayGridPlugin,
      interactionPlugin,
    ],
    initialView: 'dayGridMonth',
    height: 'auto',
    selectable: true,
    select: this.addEvent.bind(this),
    events: [],
  };
  readonly #matDialog = inject(MatDialog);

  constructor(private readonly _matDialog: MatDialog) {}

  addEvent(args: DateSelectArg) {
    const dialog = this._matDialog.open(AddEventDialogComponent, {data: args});
    // console.log(args.startStr);
    dialog.afterClosed().subscribe((data) => {
      const calendarApi = args.view.calendar;
      calendarApi.addEvent({
      title: data.title, date: data.date, allDay: true
      })
    });
  }
}
