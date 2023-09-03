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

  constructor(
    public dialogRef: MatDialogRef<AddEventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DateSelectArg,
    private readonly _formBuilder: FormBuilder,
    private globalVarsService: GlobalVarsService,
  ) {
  }
  readonly form = this._formBuilder.group({
    title: [''],
    date: [this.data.start, Validators.required],
    time: [null, Validators.required],
    duration: [30, Validators.required],
    location: ['', Validators.required],
    type: ['', Validators.required],
    description: [''],
    notes: [''],
    client: ['', Validators.required],
  });

  role = '';
  errorTxt = '';
  location_options = [
    "Online",
    "F2F"
  ]

  ngOnInit(): void {
    this.role = this.globalVarsService.getUser()?.isAdmin ? 'manager' : 'consultant';
    this.options = this.role === 'manager' ? this.options : this.options.slice(0, 5);
  }

  checkValidity() {
    const fields = this.form.value
    if(!fields.date) {
      this.errorTxt = 'Please select a date';
      return false;
    } else {
      if(fields.date < new Date()) {
        this.errorTxt = 'Please select a future date';
        return false;
      }
    }
    if(!fields.time) {
      this.errorTxt = 'Please select a time';
      return false;
    }
    if(!fields.type) {
      this.errorTxt = 'Please select a type of meeting';
      return false;
    }
    if(!fields.client) {
      this.errorTxt = 'Please add the client\'s name';
      return false;
    }
    if(!fields.duration) {
      this.errorTxt = 'Please add the duration of the meeting';
      return false;
    }
    if(!fields.location) {
      this.errorTxt = 'Please select a location';
      return false;
    }
    if(!fields.title) {
      this.form.value.title = 'Meeting';
    }
    if(!fields.description) {
      this.form.value.description = 'No description';
    }
    if(!fields.notes) {
      this.form.value.notes = 'No notes';
    }
    this.errorTxt = '';
    return true;
  }

  save() {
    if(this.checkValidity()) {
      this.dialogRef.close(this.form.value);
    }
  }
}
