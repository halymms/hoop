import { ApiTeamRepository } from '../../repositories/implementations/ApiTeamRepository';
import { GetAllTeamsUseCase } from './GetAllTeamsUseCase';

export const getAllTeamsUseCase = new GetAllTeamsUseCase(
  new ApiTeamRepository() 
);