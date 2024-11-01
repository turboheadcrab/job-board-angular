import { Component } from '@angular/core';
import { ClarityModule, ClrNavigationModule } from '@clr/angular';

import { HeaderComponent } from './core/component/header/header.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    ClrNavigationModule,
    ClarityModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'job-board-angular';
}
