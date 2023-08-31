import { Component } from '@angular/core';
import {AppComponent} from "../../../app.component";
import {GlobalVarsService} from "../../../services/global-vars.service";
import {RequestsService} from "../../../services/requests.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(
    private appComponent: AppComponent,
    private globalVarsService: GlobalVarsService,
    private requestsService: RequestsService,
  ) {
    this.appComponent.selectedOption = 'user';
  }
  isAdmin = false

  ngOnInit(): void {
    // @ts-ignore
    this.isAdmin = this.globalVarsService.getUser().isAdmin;
  }
}
