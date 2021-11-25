import { ITeamRepository } from "../../repositories/ITeamRepository";

export class GetAllTeamsUseCase {
  constructor(
    public teamsRepository: ITeamRepository    
  ) {}

  async execute() {
    const teams = await this.teamsRepository.getAllTeams();
    return teams;
  }
}