import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-inspect-progress',
  templateUrl: './inspect-progress.component.html',
  styleUrls: ['./inspect-progress.component.css']
})
export class InspectProgressComponent {

  consultant_name;
  constructor(
    public dialogRef: MatDialogRef<InspectProgressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.consultant_name = this.data.consultant_name;
  }

  close() {
    this.dialogRef.close();
  }
}
