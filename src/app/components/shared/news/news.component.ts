import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  constructor(private router: Router) { }

  navigateToNews(): void {
    this.router.navigate(['newspaper']).then()
  }

  newsTitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit Intelegi?"
  newsImageUrl = "https://yt3.ggpht.com/a/AATXAJzsHPys1EoSnxprcPapwsQsb1gr97KzKfnRBw=s900-c-k-c0xffffffff-no-rj-mo"
}
