import { ApiLineupRepository } from '../../repositories/implementations/ApiLineupRepository';
import { UpdateLineupUseCase } from './UpdateLineupUseCase';

export const updateLineupUseCase = new UpdateLineupUseCase(
  new ApiLineupRepository() 
);