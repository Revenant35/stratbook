import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./screens/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'teams',
    loadComponent: () => import('./screens/teams/teams.component').then(m => m.TeamsComponent)
  },
  {
    path: 'teams/:id',
    loadComponent: () => import('./screens/team-info/team-info.component').then(m => m.TeamInfoComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
