import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MapComponent} from "./components/map/map.component";
import {CommonModule} from "@angular/common";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {PlayersListComponent} from "./components/players-list/players-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MapComponent, NavbarComponent, PlayersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
