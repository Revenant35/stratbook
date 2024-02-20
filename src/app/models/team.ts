import { Player } from './player';

export interface Team {
  id: number;
  name: string;
  members: Player[];
  notifications: any[];

  avatar?: string;
  leader?: string;
  faceit_url?: string;
  team_id?: string;
}
