import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-change-target',
  templateUrl: './change-target.component.html',
  styleUrls: ['./change-target.component.css']
})
export class ChangeTargetComponent {

  constructor(
    public dialogRef: MatDialogRef<ChangeTargetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}
  target = '';

  close() {
    this.dialogRef.close(this.target);
  }
}
