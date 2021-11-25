import { ILineUpRepository } from "../../repositories/ILineUpRepository";

export class GetLineupByUserTeamAndStageUseCase {
  constructor(
    public lineupRepository: ILineUpRepository
  ) {}
  
  async execute(userTeamId: number, stageId: number) {
    const lineups = await this.lineupRepository.getLineupsByUserTeamAndStage(userTeamId, stageId);
    return lineups;
  }
}