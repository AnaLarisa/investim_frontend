import { Component } from '@angular/core';
import {GlobalVarsService} from "../../../services/global-vars.service";

@Component({
  selector: 'app-personal-statistics',
  templateUrl: './personal-statistics.component.html',
  styleUrls: ['./personal-statistics.component.css']
})
export class PersonalStatisticsComponent {
  constructor(
    private globalVarsService: GlobalVarsService,
  ) {
  }
  username = ''

  ngOnInit(): void {
    // @ts-ignore
    this.username = this.globalVarsService.getUser().username;
  }
}
