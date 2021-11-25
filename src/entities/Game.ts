import { Stadium } from "./Stadium";
import { Team } from "./Team";

export class Game {
  constructor(
    public id: number,
    public away_team: Team,
    public home_team: Team,
    public stadium: Stadium,
    public season: number,
    public status: string,
    public season_type: number,
    public day: string,
    public date_time: string,
    public team_away: string,
    public team_home: string,
    public away_team_score: number,
    public home_team_score: number,
    public updated: string,
    public game_end_date_time: string 
  ) {}
}