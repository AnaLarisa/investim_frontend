import { Component } from '@angular/core';
import {AppComponent} from "../../../app.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private appComponent: AppComponent, private router: Router) {
    this.appComponent.selectedOption = 'dashboard';
  }

  goal = '';
  goals = [
    'My first life goal',
    'My second life goal',
    'My third life goal',
  ]

  meetings = [
    {
      date: new Date(),
      title: 'Meeting 1',
    },
    {
      date: new Date(),
      title: 'Meeting 2',
    },
    {
      date: new Date(),
      title: 'Meeting 3',
    }
  ]

  addNew() {
    this.goals.push(this.goal)
  }

  navigateToCalendar() {
    this.router.navigate(['calendar']).then();
  }

  deleteGoal(goal: string) {
    this.goals = this.goals.filter(g => g !== goal);
  }
}
