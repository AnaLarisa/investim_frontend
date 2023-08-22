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

  changeActiveOption(option: string) {
    this.selectedOption = option;
  }
  navigateTo(option: string): void {
    // Update the selectedOption when a menu item is clicked
    this.selectedOption = option;

    // Navigate to the selected route
    this.router.navigate([option]);
  }

  logout(): void {
    // Implement your logout logic here
  }
}
