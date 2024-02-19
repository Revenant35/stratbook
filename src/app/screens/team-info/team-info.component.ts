import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TeamService} from "@app/services/team.service";
import {firstValueFrom, Observable} from "rxjs";
import {Team} from "@app/models/team";
import {PlayersListComponent} from "@app/components/players-list/players-list.component";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-team-info',
  standalone: true,
  imports: [
    PlayersListComponent,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './team-info.component.html',
  styleUrl: './team-info.component.css'
})
export class TeamInfoComponent implements OnInit {
  team$: Observable<Team> | null = null;

  constructor(private route: ActivatedRoute, private teamService: TeamService) {

  }

  async ngOnInit() {
    const id = await firstValueFrom(this.route.params).then(params => params['id']);
    console.log(id);
    this.team$ = this.teamService.getFaceitTeam(id);
    this.team$.subscribe(team => {
      console.log(team);
    });
  }

}
