import { ApiPlayerRepository } from '../../repositories/implementations/ApiPlayerRepository';
import { GetAllPlayersUseCase } from './GetAllPlayersUseCase';

export const getAllPlayersUseCase = new GetAllPlayersUseCase(
  new ApiPlayerRepository() 
);