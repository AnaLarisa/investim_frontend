import { Component } from '@angular/core';

@Component({
  selector: 'app-team-information',
  templateUrl: './team-information.component.html',
  styleUrls: ['./team-information.component.css']
})
export class TeamInformationComponent {

  openProgress(consultant_name: string) {

  }

  consultants = [
    {
      name: 'John Doe',
    },
    {
      name: 'John Doi',
    },
    {
      name: 'John Doe',
    },
    {
      name: 'John Doi',
    },
    {
      name: 'John Doe',
    },
    {
      name: 'John Doi',
    }
  ]

}
