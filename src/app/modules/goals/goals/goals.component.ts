import { Component } from '@angular/core';
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent {

  constructor(private appComponent: AppComponent) {
    this.appComponent.selectedOption = 'goals';
  }
}
