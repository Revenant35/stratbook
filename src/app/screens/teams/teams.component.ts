import {Component} from '@angular/core';
import {TeamService} from "@app/services/team.service";
import {firstValueFrom} from "rxjs";
import {FormsModule} from "@angular/forms";
import {Team} from "@app/models/team";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [
    FormsModule,
    AsyncPipe,
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent  {
  teams: Team[] = [];
  _loading: boolean = false;

  selectedPlatform: string | null = null;
  searchQuery: string = "";
  limit: number = 5;

  constructor(private teamService: TeamService) {
  }

  get isSearchValid() {
    return this.selectedPlatform !== null && this.searchQuery !== null;
  }

  async searchTeams() {
    this._loading = true;
    this.teams = [];

    if(this.selectedPlatform === 'faceit') {
      this.teams = await firstValueFrom(this.teamService.getFaceitTeams({nickname: this.searchQuery, offset: 0, limit: this.limit}));
    }

    this._loading = false;
  }

  get loading() {
    return this._loading;
  }
}
