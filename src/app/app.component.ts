import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ClarityModule,
  ClrIconModule,
  ClrNavigationModule,
} from '@clr/angular';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ThemePreference, ThemeService } from './core/service/theme.service';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    ClrNavigationModule,
    ClarityModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    ClrIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  #themeService = inject(ThemeService);

  setPreferredTheme(theme: ThemePreference) {
    console.info('AppComponent.setPreferredTheme() theme:', theme);
    this.#themeService.setPreferredTheme(theme);
  }

  protected readonly ThemePreference = ThemePreference;
}
