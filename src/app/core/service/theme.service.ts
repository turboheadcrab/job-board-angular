import { Injectable, signal } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

export enum AppTheme {
  Light = 'light',
  Dark = 'dark',
}
export enum ThemePreference {
  Light,
  Dark,
  System,
}

export const STORED_THEME_KEY = 'theme-preference';
export const PREFERS_DARK_SCHEME_MEDIA_QUERY = window.matchMedia(
  '(prefers-color-scheme: dark)',
);

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  #appTheme = signal<AppTheme>(AppTheme.Light);
  #preferredTheme = signal<ThemePreference>(ThemePreference.System);

  constructor() {
    const savedPreference: string | null =
      localStorage.getItem(STORED_THEME_KEY);
    const initialTheme: ThemePreference =
      this.#determineInitialTheme(savedPreference);
    this.#preferredTheme.set(Number(initialTheme));

    toObservable(this.#preferredTheme)
      .pipe(
        tap({
          next: (theme: ThemePreference) => {
            switch (theme) {
              case ThemePreference.Dark:
                this.#appTheme.set(AppTheme.Dark);
                break;
              case ThemePreference.Light:
                this.#appTheme.set(AppTheme.Light);
                break;
              case ThemePreference.System:
                this.#processSystemTheme(PREFERS_DARK_SCHEME_MEDIA_QUERY);
            }
          },
        }),
        takeUntilDestroyed(),
      )
      .subscribe();

    toObservable(this.#appTheme)
      .pipe(
        tap({
          next: (appTheme: AppTheme) =>
            document.body.setAttribute('cds-theme', appTheme),
        }),
        takeUntilDestroyed(),
      )
      .subscribe();

    PREFERS_DARK_SCHEME_MEDIA_QUERY.addEventListener(
      'change',
      (e: MediaQueryListEvent) => this.#processSystemTheme(e),
    );
  }

  #determineInitialTheme(
    savedPreferenceString: string | null,
  ): ThemePreference {
    const savedPreference = Number(savedPreferenceString);
    const isValidPreference =
      !!savedPreferenceString &&
      Object.values(ThemePreference).includes(savedPreference);
    return isValidPreference
      ? (savedPreference as ThemePreference)
      : ThemePreference.System;
  }

  #processSystemTheme(e: MediaQueryListEvent | MediaQueryList) {
    if (this.#preferredTheme() === ThemePreference.System) {
      this.#appTheme.set(e.matches ? AppTheme.Dark : AppTheme.Light);
    }
  }

  setPreferredTheme(theme: ThemePreference) {
    localStorage.setItem(STORED_THEME_KEY, theme.toString());
    this.#preferredTheme.set(theme);
  }
}
