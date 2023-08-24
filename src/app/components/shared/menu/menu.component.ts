import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() selectedOption!: string;

  constructor(private router: Router) { }
  navigateTo(option: string): void {
    // Navigate to the selected route
    this.router.navigate([option]).then();
  }

  logout(): void {
    // Implement your logout logic here
    sessionStorage.setItem("authToken", "");
    this.router.navigate(['login']).then()
  }
}
