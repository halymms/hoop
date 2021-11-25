import { Game } from "./Game";

export class PlayerStat {
  constructor(
    public id: number,
    public playerId: number,
    public game: Game,
    public three_points_lost: string,
    public three_points_made: string,
    public shots_lost: string,
    public shots_made: string,
    public tournover: string,
    public points: string,
    public double_doubles: string,
    public triple_doubles: string,
    public fouls: string,
    public rebounds: string,
    public assists: string,
    public blocked_shots: string,
    public steals: string,
    public hoop_three_points_lost: string,
    public hoop_three_points_made: string,
    public hoop_shots_lost: string,
    public hoop_shots_made: string,
    public hoop_tournover: string,
    public hoop_points: string,
    public hoop_double_doubles: string,
    public hoop_triple_doubles: string,
    public hoop_fouls: string,
    public hoop_rebounds: string,
    public hoop_assists: string,
    public hoop_blocked_shots: string,
    public hoop_steals: string,
    public hoop_total_points: string 
  ) {}
}