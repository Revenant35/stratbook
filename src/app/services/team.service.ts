import { Injectable } from '@angular/core';
import {Observable, tap} from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Team} from "../models/team";
import {environment} from "@env/environment";

export interface FaceitTeamQueryParams {
  nickname: string;
  offset?: number;
  limit?: number;
}

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  getFaceitTeams(params: FaceitTeamQueryParams): Observable<Team[]> {
    if(!params.nickname) {
      throw new Error('Nickname is required');
    }
    let httpParams = new HttpParams();
    httpParams = httpParams.append('nickname', params.nickname);
    httpParams = httpParams.append('game', 'cs2');
    if (params?.offset !== undefined) {
      httpParams = httpParams.append('offset', params.offset.toString());
    }
    if (params?.limit !== undefined) {
      httpParams = httpParams.append('limit', params.limit.toString());
    }

    // Add Bearer token to request
    const headers = {
      "accept": "application/json",
      "Authorization": `Bearer ${environment.faceitApiKey}`
    }

    return this.http
      .get<any>(`https://open.faceit.com/data/v4/search/teams`, {params: httpParams, headers: headers})
      .pipe(
        tap(data => console.log({endpoint: 'https://open.faceit.com/data/v4/search/teams', params: httpParams, headers: headers, data: data})),
        map(data => data.items),
        tap(teams => console.log({teams})),
        // replace {lang} with 'en' in faceit_url
        map(teams => teams.map((team: any) => {
          return {
            ...team,
            faceit_url: decodeURI(team.faceit_url).replace('{lang}', 'en'),
          };
        }))
      );
  }

  getFaceitTeam(id: string): Observable<Team> {

    // Add Bearer token to request
    const headers = {
      "accept": "application/json",
      "Authorization": `Bearer ${environment.faceitApiKey}`
    }

    return this.http
      .get<any>(`https://open.faceit.com/data/v4/teams/${id}`, {headers: headers})
      .pipe(
        tap(data => console.log({endpoint: 'https://open.faceit.com/data/v4/teams/${id}', headers: headers, data: data})),
        map(team => {
          return {
            ...team,
            faceit_url: decodeURI(team.faceit_url).replace('{lang}', 'en'),
          };
        }),
        tap(team => console.log("Team URL updated: ", {team})),
        map(team => {
          return {
            ...team,
            members: team.members.map((member: any) => {
              return {
                ...member,
                faceit_url: decodeURI(member.faceit_url).replace('{lang}', 'en'),
              };
            })
          };
        }),
        tap(team => console.log("Member URL(s) updated: ", {team})),
      );
  }

  constructor(private http: HttpClient) { }
}
