import {Component, Input} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {Player} from "@app/models/player";
import {FlagComponent} from "../flag/flag.component";

@Component({
  selector: 'app-players-list',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    NgIf,
    FlagComponent
  ],
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.css'
})
export class PlayersListComponent {
  @Input({required: true}) players: Player[] = [];
}
