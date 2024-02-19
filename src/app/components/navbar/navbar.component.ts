import { Component } from '@angular/core';
import {NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import {Theme} from "@app/models/theme";
import {ThemeService} from "@app/services/theme.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgIf,
    NgSwitchCase,
    NgSwitch,
    NgSwitchDefault
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  theme: Theme | null = this.themeService.getPreferredTheme();

  constructor(private themeService: ThemeService) { }

  changeTheme(theme: Theme) {
    this.themeService.setTheme(theme);
    this.theme = theme;
    console.log(this.theme);
  }
}
