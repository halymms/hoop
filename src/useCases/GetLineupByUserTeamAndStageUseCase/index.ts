import { ApiLineupRepository } from '../../repositories/implementations/ApiLineupRepository';
import { GetLineupByUserTeamAndStageUseCase } from './GetLineupByUserTeamAndStageUseCase';

export const getLineupsByUserTeamAndStageUseCase = new GetLineupByUserTeamAndStageUseCase(
  new ApiLineupRepository()
);