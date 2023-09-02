import { Component } from '@angular/core';
import {AppComponent} from "../../../app.component";
import {Router} from "@angular/router";
import {GlobalVarsService} from "../../../services/global-vars.service";
import {RequestsService} from "../../../services/requests.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(
    private appComponent: AppComponent,
    private router: Router,
    private globalVarsService: GlobalVarsService,
    private requestsService: RequestsService,
  ) {
    this.appComponent.selectedOption = 'dashboard';
  }

  meetings: any = []
  goals: any = []

  ngOnInit(): void {
    this.requestsService.getMeetingsUpcoming3().subscribe({
      next: (data: any) => {
        this.meetings = data;
      },
      error: (err: any) => {
        if(err.status !== 404)
        console.log(err);
      }
    })
    this.requestsService.getGoals().subscribe({
      next: (data: any) => {
        this.goals = data;
      },
      error: (err: any) => {
        if(err.status !== 404)
        console.log(err);
      }
    })
  }

  goal = '';



  addNew() {
    this.requestsService.addGoal(this.goal).subscribe({
      next: (data: any) => {
        this.goals.push(this.goal)
      },
      error: (err: any) => {
        this.goals.push(this.goal)
      }
    })
  }

  navigateToCalendar() {
    this.router.navigate(['calendar']).then();
  }

  deleteGoal(goal: string) {
    this.requestsService.deleteGoal(goal).subscribe({
      next: (data: any) => {
        this.goals = this.goals.filter((g: any) => g !== goal);
      },
      error: (err: any) => {
        this.goals = this.goals.filter((g: any) => g !== goal);
      }
    })
  }
}
