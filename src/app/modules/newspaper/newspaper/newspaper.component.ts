import { Component } from '@angular/core';
import {AppComponent} from "../../../app.component";
import {GlobalVarsService} from "../../../services/global-vars.service";
import {RequestsService} from "../../../services/requests.service";

@Component({
  selector: 'app-newspaper',
  templateUrl: './newspaper.component.html',
  styleUrls: ['./newspaper.component.css']
})
export class NewspaperComponent {
  constructor(
    private appComponent: AppComponent,
    private globalVarsService: GlobalVarsService,
    private requestsService: RequestsService,
  ) {
    this.appComponent.selectedOption = 'newspaper';
  }

  articles: any = []
  loaded = false
  ngOnInit(): void {
    this.requestsService.getNews().subscribe({
      next: (data: any) => {
        this.articles = data;
        this.loaded = true;
        this.globalVarsService.setNews(data)  // load news
      },
      error: (err: any) => {
        if(err.status !== 200)
          console.log(err);
      }
    });
  }

}
