import { Team } from "../entities/Team";

export interface ITeamRepository {
  getAllTeams(): Promise<Team[]>;
}