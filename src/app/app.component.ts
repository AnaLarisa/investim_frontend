import { Component } from '@angular/core';
import {GlobalVarsService} from "./services/global-vars.service";
import {Router} from "@angular/router";
import {RequestsService} from "./services/requests.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private globalVarsService: GlobalVarsService,
    private router: Router,
    private requestsService: RequestsService,
  ) {}

  ngOnInit(): void {
    if(!this.globalVarsService.getUser()){
      this.router.navigate(['/login']).then();
    }
  }

  selectedOption: string = '';
  title = 'investime';
}
