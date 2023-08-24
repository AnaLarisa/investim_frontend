import { Component } from '@angular/core';
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private appComponent: AppComponent) {
    this.appComponent.selectedOption = 'user';
  }
}
