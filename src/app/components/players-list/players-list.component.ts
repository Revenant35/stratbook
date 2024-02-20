import { Component, Input, OnChanges } from '@angular/core';
import { AsyncPipe, NgForOf, NgIf, NgOptimizedImage } from '@angular/common';
import { Player } from '@app/models/player';
import { FlagComponent } from '../flag/flag.component';

@Component({
  selector: 'app-players-list',
  standalone: true,
  imports: [AsyncPipe, NgForOf, NgIf, FlagComponent, NgOptimizedImage],
  templateUrl: './players-list.component.html',
  styleUrl: './players-list.component.css',
})
export class PlayersListComponent implements OnChanges {
  @Input({ required: true }) players!: Player[];
  @Input({ required: true }) loading!: boolean;
  @Input() leader: string | undefined;

  ngOnChanges() {
    if (
      this.players &&
      this.players.some((player) => player.user_id === this.leader)
    ) {
      // Place leader at the top of the list
      this.players.sort((a, b) => (a.user_id === this.leader ? -1 : 1));
    }
  }
}
