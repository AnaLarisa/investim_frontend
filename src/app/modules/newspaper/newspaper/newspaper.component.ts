import { Component } from '@angular/core';
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-newspaper',
  templateUrl: './newspaper.component.html',
  styleUrls: ['./newspaper.component.css']
})
export class NewspaperComponent {
  constructor(private appComponent: AppComponent) {
    this.appComponent.selectedOption = 'newspaper';
  }
}
