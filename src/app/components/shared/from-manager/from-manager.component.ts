import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-from-manager',
  templateUrl: './from-manager.component.html',
  styleUrls: ['./from-manager.component.css']
})
export class FromManagerComponent {


  constructor(private router: Router) { }

  navigateToManager(): void {
    this.router.navigate(['manager']).then()
  }

  title = "Tips and tricks for your first meeting with the client"
}
