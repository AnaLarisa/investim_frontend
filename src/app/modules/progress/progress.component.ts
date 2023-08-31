import {Component, inject, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddEventDialogComponent} from "../calendar-module/dialogs/add-event-dialog/add-event-dialog.component";
import {ChangeTargetComponent} from "./change-target/change-target.component";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {
  @Input() consultant_name!: string;
  @Input() isEditable!: boolean;
  number_of_contracts = 9;
  number_of_clients = 12;
  percentage = this.number_of_contracts / this.number_of_clients * 100;
  target = 40;
  startDate = new Date();
  endDate = new Date();
  readonly #matDialog = inject(MatDialog);

  constructor(private readonly _matDialog: MatDialog) {}

  handleChange(dateName: string, newDate: Date){
    if(dateName === 'startDate') {
      if(newDate > this.endDate) {
        this.startDate = this.endDate;
      } else {
        this.startDate = newDate;
      }
    } else {
      if(newDate < this.startDate) {
        this.endDate = this.startDate;
      } else {
        this.endDate = newDate;
      }
    }
  }

  openDialog() {
    const dialog = this._matDialog.open(ChangeTargetComponent);
    dialog.afterClosed().subscribe((data) => {
      console.log(data)
    });
  }
}
