import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {GlobalVarsService} from "../../../services/global-vars.service";

@Component({
  selector: 'app-from-manager',
  templateUrl: './from-manager.component.html',
  styleUrls: ['./from-manager.component.css']
})
export class FromManagerComponent {


  constructor(
    private router: Router,
    private globalVarsService: GlobalVarsService,
  ) { }

  title = "No articles posted yet"

  ngOnInit(): void {
    if(this.globalVarsService.getArticles().length > 0)
      this.title = this.globalVarsService.getArticles()[0].title
  }

  navigateToManager(): void {
    this.router.navigate(['manager']).then()
  }
}
