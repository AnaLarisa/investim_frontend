import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-display-event-dialog',
  templateUrl: './display-event-dialog.component.html',
  styleUrls: ['./display-event-dialog.component.css']
})
export class DisplayEventDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DisplayEventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

    let month = this.data.date.getUTCMonth() + 1; //months from 1-12
    let day = this.data.date.getUTCDate();
    let year = this.data.date.getUTCFullYear();

    this.data.date = year + "/" + month + "/" + day;
  }

  delete() {
    this.dialogRef.close({
      data: this.data,
      delete: true
    });
  }

  close() {
    this.dialogRef.close({
      delete: false
    });
  }
}
