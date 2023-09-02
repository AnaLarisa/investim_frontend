import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {GlobalVarsService} from "../../../services/global-vars.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  constructor(
    private router: Router,
    private globalVarsService: GlobalVarsService,
  ) { }

  newsTitle = ""
  newsImageUrl = ""

  ngOnInit(): void {
    const news_article = (this.globalVarsService.getNews())[0];
    this.newsTitle = news_article.title;
    this.newsImageUrl = news_article.urlToImage;
  }

  navigateToNews(): void {
    this.router.navigate(['newspaper']).then()
  }


}
