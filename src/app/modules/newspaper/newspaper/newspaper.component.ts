import { Component } from '@angular/core';
import {AppComponent} from "../../../app.component";
import {GlobalVarsService} from "../../../services/global-vars.service";

@Component({
  selector: 'app-newspaper',
  templateUrl: './newspaper.component.html',
  styleUrls: ['./newspaper.component.css']
})
export class NewspaperComponent {
  constructor(
    private appComponent: AppComponent,
    private globalVarsService: GlobalVarsService,
  ) {
    this.appComponent.selectedOption = 'newspaper';
  }

  articles: any = []

  ngOnInit(): void {
    this.articles = this.globalVarsService.getNews();
  }

}
