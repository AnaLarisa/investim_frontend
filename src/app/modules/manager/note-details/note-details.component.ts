import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent {

  @Input() note!: any;
}
