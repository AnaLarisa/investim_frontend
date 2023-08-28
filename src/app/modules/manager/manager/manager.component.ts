import { Component } from '@angular/core';
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent {

  constructor(private appComponent: AppComponent) {
    this.appComponent.selectedOption = 'manager';
  }

  manager = {
    name: 'Luca',
  }
}
