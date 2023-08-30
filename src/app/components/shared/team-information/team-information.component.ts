import {Component, inject} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {InspectProgressComponent} from "../inspect-progress/inspect-progress.component";

@Component({
  selector: 'app-team-information',
  templateUrl: './team-information.component.html',
  styleUrls: ['./team-information.component.css']
})
export class TeamInformationComponent {

  readonly #matDialog = inject(MatDialog);

  constructor(private readonly _matDialog: MatDialog) {}

  openProgress(consultant_name: string) {
    const dialog = this._matDialog.open(InspectProgressComponent, {data: {consultant_name: consultant_name}});
    dialog.afterClosed().subscribe((data) => {
      console.log(data)
    });
  }

  deleteUser(consultant_name: string) {

  }

  consultants = [
    {
      name: 'John Dosdssssssse',
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
