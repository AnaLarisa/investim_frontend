import {Component, inject} from '@angular/core';
import {CalendarOptions, DateSelectArg} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {MatDialog} from "@angular/material/dialog";
import {AddEventDialogComponent} from "../dialogs/add-event-dialog/add-event-dialog.component";
import {DisplayEventDialogComponent} from "../dialogs/display-event-dialog/display-event-dialog.component";
import {RequestsService} from "../../../services/requests.service";
import {GlobalVarsService} from "../../../services/global-vars.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {

  constructor(
    private readonly _matDialog: MatDialog,
    private globalVarsService: GlobalVarsService,
    private requestsService: RequestsService,
  ) {}

  loadedEvents: any = [];

  ngOnInit(): void {
    this.loadedEvents = this.globalVarsService.getMeetings().map((item: any) => ({
      title: item.title,
      date: item.date,
      allDay: true,
      client: item.clientName,
      type: item.type,
      location: item.location,
      description: item.description,
      notes: item.meetingNotes,
      _duration: item.duration,
      time: item.time,
    }))
  }

  calendarOptions: CalendarOptions = {
    initialEvents: [], // alternatively, use the `events` setting to fetch from a feed
    editable: true,
    selectMirror: true,
    eventClick: this.handleEventClick.bind(this),
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
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
    events: this.loadedEvents,
  };
  readonly #matDialog = inject(MatDialog);

  handleEventClick(clickInfo: any) {
    const args = {
      ...clickInfo.event.extendedProps,
      title: clickInfo.event.title,
      date: clickInfo.event.start,
    }
    const dialog = this._matDialog.open(DisplayEventDialogComponent,
      {
        data: {
          ...args,
          remove: clickInfo.event.remove
        }
      });
      dialog.afterClosed().subscribe((data) => {
        if (data) {
          clickInfo.event.remove();
        }
      });
  }

  addEvent(args: DateSelectArg) {
    const dialog = this._matDialog.open(AddEventDialogComponent, {data: args});
    dialog.afterClosed().subscribe((data) => {
      if(data){
        this.requestsService.addMeeting({
          title: data.title,
          date: data.date,
          time: data.time,
          duration: data.duration,
          location: data.location,
          type: data.type,
          description: data.description,
          meetingNotes: data.notes,
          clientName: data.client,
        }).subscribe({
          next: (data: any) => {
            const calendarApi = args.view.calendar;
            calendarApi.addEvent({
              title: data.title,
              date: data.date,
              allDay: true,
              client: data.client,
              type: data.type,
              location: data.location,
              description: data.description,
              notes: data.notes,
              _duration: data.duration,
              time: data.time,
            })
          },
          error: (err: any) => {
            if(err.status !== 200)
            console.log(err);
          }
        })
      }
    });
  }
}
