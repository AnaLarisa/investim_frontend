import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {RequestsService} from "../../../services/requests.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  constructor(
    private router: Router,
    private requestsService: RequestsService,
  ) { }

  newsTitle = "No news to show"
  newsImageUrl = ""

  loaded = false

  ngOnInit(): void {
    this.requestsService.getRandomNews().subscribe({
      next: (data: any) => {
        this.loaded = true;
        if(data){
          this.newsTitle = data.title;
          this.newsImageUrl = data.urlToImage;
        }
      },
      error: (err: any) => {
        if(err.status !== 200)
          console.log(err);
      }
    })
  }

  navigateToNews(): void {
    this.router.navigate(['newspaper']).then()
  }
}
