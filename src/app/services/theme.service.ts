import {Injectable} from '@angular/core';
import {Theme} from "../models/theme";


@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() {
    this.setTheme(this.getPreferredTheme());
  }

  private get storedTheme(): Theme | null {
    return localStorage.getItem('theme') as Theme | null ;
  }

  private set storedTheme(theme: Theme) {
    localStorage.setItem('theme', theme);
  }

  public getPreferredTheme() {
    const storedTheme = this.storedTheme;
    console.log(storedTheme);
    if (storedTheme) {
      return storedTheme
    }

    console.log(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  public setTheme(theme: Theme) {
    this.storedTheme = theme;
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }
}
