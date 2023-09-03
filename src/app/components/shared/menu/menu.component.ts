import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {GlobalVarsService} from "../../../services/global-vars.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() selectedOption!: string;

  constructor(
    private router: Router,
    private globalVarsService: GlobalVarsService
  ) { }
  username = ''
  ngOnInit(): void {
    // @ts-ignore
    this.username = this.globalVarsService.getUser().username;
  }

  navigateTo(option: string): void {
    // Navigate to the selected route
    this.router.navigate([option]).then();
  }

  logout(): void {
    sessionStorage.setItem("authToken", "");
    this.globalVarsService.setReloadedChat(false)
    this.globalVarsService.setMeetings([]);
    this.globalVarsService.setArticles([]);
    this.globalVarsService.setNews([]);
    this.globalVarsService.setOptions({});
    this.globalVarsService.setUser(null);
    this.router.navigate(['login']).then()
  }
}
