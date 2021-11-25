import { ApiPlayerStatRepository } from '../../repositories/implementations/ApiPlayerStatRepository';
import { GetPlayerStatByPlayerIdAndDate } from './GetPlayerStatByPlayerIdAndDate';

export const getPlayerStatByPlayerIdAndDate = new GetPlayerStatByPlayerIdAndDate(
  new ApiPlayerStatRepository()
);