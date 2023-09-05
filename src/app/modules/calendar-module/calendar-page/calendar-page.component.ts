import { Component } from '@angular/core';
import {AppComponent} from "../../../app.component";
import {RequestsService} from "../../../services/requests.service";
import {GlobalVarsService} from "../../../services/global-vars.service";

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.css']
})


export class CalendarPageComponent {
  constructor(
    private appComponent: AppComponent,
    private requestsService: RequestsService,
    private globalVarsService: GlobalVarsService,
  ) {
    this.appComponent.selectedOption = 'calendar';
  }

  loaded = false;

  ngOnInit(): void {
    this.requestsService.getMeetings().subscribe({
      next: (data: any) => {
        this.globalVarsService.setMeetings(data);  // load meetings
        this.loaded = true;
      },
      error: (err: any) => {
        if(err.status !== 200)
          console.log(err);
      }
    })
  }
}
