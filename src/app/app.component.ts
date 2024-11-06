import { Component, inject } from '@angular/core';
import {
  ClarityModule,
  ClrIconModule,
  ClrNavigationModule,
} from '@clr/angular';

import { HeaderComponent } from './core/component/header/header.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ThemePreference, ThemeService } from './core/service/theme.service';

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
    ClrIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  #themeService = inject(ThemeService);
  title = 'job-board-angular';

  getPreferredTheme() {
    return this.#themeService.getPreferredTheme();
  }

  setPreferredTheme(theme: ThemePreference) {
    console.info('AppComponent.setPreferredTheme() theme:', theme);
    this.#themeService.setPreferredTheme(theme);
  }

  protected readonly ThemePreference = ThemePreference;
}
