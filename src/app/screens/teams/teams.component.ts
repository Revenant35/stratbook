import { Component } from '@angular/core';
import { TeamService } from '@app/services/team.service';
import { firstValueFrom } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Team } from '@app/models/team';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [FormsModule, AsyncPipe, NgForOf, NgIf, RouterLink],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css',
})
export class TeamsComponent {
  teams: Team[] = [];
  selectedPlatform: string | null = 'faceit';
  searchQuery: string = '';
  limit: number = 5;

  constructor(private teamService: TeamService) {}

  _loading: boolean = false;

  get loading() {
    return this._loading;
  }

  get isSearchValid() {
    return this.selectedPlatform && this.searchQuery;
  }

  async searchTeams() {
    this._loading = true;
    this.teams = [];

    if (this.selectedPlatform === 'faceit') {
      this.teams = await firstValueFrom(
        this.teamService.getFaceitTeams({
          nickname: this.searchQuery,
          offset: 0,
          limit: this.limit,
        }),
      );
    }

    this._loading = false;
  }
}
