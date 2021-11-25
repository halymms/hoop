import { ApiUserTeamRepository } from '../../repositories/implementations/ApiUserTeamRepository';
import { GetUserTeamByIdUseCase } from './GetUserTeamByIdUseCase';

export const getUserTeamByIdUseCase = new GetUserTeamByIdUseCase(
  new ApiUserTeamRepository() 
);