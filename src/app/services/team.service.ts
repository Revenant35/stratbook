import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
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
      .pipe(map((data => data.items)));
  }

  getFaceitTeam(id: string): Observable<Team> {

    // Add Bearer token to request
    const headers = {
      "accept": "application/json",
      "Authorization": `Bearer ${environment.faceitApiKey}`
    }

    return this.http
      .get<any>(`https://open.faceit.com/data/v4/teams/${id}`, {headers: headers})
      .pipe();
  }

  constructor(private http: HttpClient) { }
}
