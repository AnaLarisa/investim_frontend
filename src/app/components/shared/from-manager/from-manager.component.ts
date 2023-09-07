import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {RequestsService} from "../../../services/requests.service";

@Component({
  selector: 'app-from-manager',
  templateUrl: './from-manager.component.html',
  styleUrls: ['./from-manager.component.css']
})
export class FromManagerComponent {


  constructor(
    private router: Router,
    private requestsService: RequestsService,
  ) { }

  title = "No articles posted yet"
  loaded = false

  ngOnInit(): void {
    this.requestsService.getRandomArticleFromManager().subscribe({
      next: (data: any) => {
        if(data)
          this.loaded = true;
          this.title = data.title;
      },
      error: (err: any) => {
        if(err.status !== 200)
          console.log(err);
      }
    })
  }

  navigateToManager(): void {
    this.router.navigate(['manager']).then()
  }
}
