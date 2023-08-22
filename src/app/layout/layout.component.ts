// layout.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-menu></app-menu>
    <div class="content">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
    }

    .content {
      flex-grow: 1;
      overflow: auto;
    }
  `],
})
export class LayoutComponent {}
