import {Component, Input, SimpleChanges} from '@angular/core';
import {RequestsService} from "../../../services/requests.service";
import {GlobalVarsService} from "../../../services/global-vars.service";

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent {

  @Input() note!: any;
  @Input() noteArray!: any;

  constructor(
    private globalVarsService: GlobalVarsService,
    private requestsService: RequestsService,
  ) {
  }

  title = '';
  content = '';
  observations = '';
  isNew = true;


  ngOnChanges(changes: SimpleChanges) {
    if(this.note) {
      this.title = this.note.title;
      this.content = this.note.content;
      this.observations = this.note.observations;
      this.isNew = false;
    }
  }

  addNew() {
    if(this.isNew){
      const newArticle = {
        title: this.title,
        content: this.content,
        observations: this.observations
      }
      this.requestsService.addArticlesFromManager(newArticle).subscribe({
        next: (data: any) => {
          this.noteArray.push(data);
        },
        error: (err: any) => {
          if(err.status !== 200)
          console.log(err);
        }
      })
    } else {
      this.requestsService.updateArticlesFromManager(this.note.id, this.note).subscribe({
        next: (data: any) => {
          this.isNew = true;
          this.title = this.content = this.observations = '';
        },
        error: (err: any) => {
          if(err.status !== 200)
          console.log(err);
        }
      })
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
