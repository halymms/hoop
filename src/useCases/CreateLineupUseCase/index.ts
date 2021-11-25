import { ApiLineupRepository } from '../../repositories/implementations/ApiLineupRepository';
import { CreateLineupUseCase } from './CreateLineupUseCase';

export const createLineupUseCase = new CreateLineupUseCase(
  new ApiLineupRepository() 
);