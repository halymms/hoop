import { ApiPlayerStatRepository } from '../../repositories/implementations/ApiPlayerStatRepository';
import { GetPlayerStatByGameIdUseCase } from './GetPlayerStatByGameIdUseCase';

export const getPlayerStatByGameIdUseCase = new GetPlayerStatByGameIdUseCase(
  new ApiPlayerStatRepository()
);