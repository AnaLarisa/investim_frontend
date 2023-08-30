import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DateSelectArg} from "@fullcalendar/core";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-event-dialog',
  templateUrl: './add-event-dialog.component.html',
  styleUrls: ['./add-event-dialog.component.css']
})
export class AddEventDialogComponent {
  readonly form = this._formBuilder.group({
    title: [''],
    date: [this.data.start, Validators.required],
    time: [null, Validators.required],
    duration: [30, Validators.required],
    location: [''],
    type: ['', Validators.required],
    description: [''],
    notes: [''],
    client: ['', Validators.required],
  });

  role = 'mdddanager';

  options = [
    'Analysis',
    'ConsultationC1',
    'ConsultationC2',
    'Service',
    'PersonalMeeting',
    'TeamMeeting',
    'TellParty',
    'Seminar',
    'Training'
  ];

  location_options = [
    "Online",
    "F2F"
  ]

  constructor(
    public dialogRef: MatDialogRef<AddEventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DateSelectArg,
    private readonly _formBuilder: FormBuilder,
  ) {
    // @ts-ignore
    this.options = this.role === 'manager' ? this.options : this.options.slice(0, 5);
  }

  save() {
    console.log(this.form.value)
    this.dialogRef.close(this.form.value);
  }
}
