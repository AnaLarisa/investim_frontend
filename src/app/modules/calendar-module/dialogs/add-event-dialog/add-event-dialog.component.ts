import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DateSelectArg} from "@fullcalendar/core";
import {FormBuilder, Validators} from "@angular/forms";
import {GlobalVarsService} from "../../../../services/global-vars.service";

@Component({
  selector: 'app-add-event-dialog',
  templateUrl: './add-event-dialog.component.html',
  styleUrls: ['./add-event-dialog.component.css']
})
export class AddEventDialogComponent {


  constructor(
    public dialogRef: MatDialogRef<AddEventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DateSelectArg,
    private readonly _formBuilder: FormBuilder,
    private globalVarsService: GlobalVarsService,
  ) {
    // @ts-ignore
    this.options = this.role === 'manager' ? this.options : this.options.slice(0, 5);
  }
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

  role = '';
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

  ngOnInit(): void {
    this.role = this.globalVarsService.getUser()?.isAdmin ? 'manager' : 'consultant';
  }

  save() {
    this.dialogRef.close(this.form.value);
  }
}
