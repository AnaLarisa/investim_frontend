import {Component, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent {

  @Input() note!: any;

  title = '';
  content = '';
  observations = '';
  isNew = true;

  ngOnChanges(changes: SimpleChanges) {
    // @ts-ignore
    if(changes.note.currentValue) {
      // @ts-ignore
      this.title = changes.note.currentValue.title;
      // @ts-ignore
      this.content = changes.note.currentValue.content;
      // @ts-ignore
      this.observations = changes.note.currentValue.observations;
      this.isNew = false;
    }
  }

  addNew() {
    if(this.isNew){
      console.log(this.title, this.content, this.observations);
    } else {
      this.isNew = true;
      this.title = this.content = this.observations = '';
    }
  }

  handleChange(prop: any, newValue: any){
    if(!this.isNew){
      (this.note)[prop] = newValue
    }
    // @ts-ignore
    this[prop] = newValue;
  }
}
