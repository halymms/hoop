import { ApiJourneyRepository } from '../../repositories/implementations/ApiJourneyRepository';
import { getStagesByJourneyIdUseCase } from '../GetStagesByJourneyIdUseCase';
import { GetJourneyByIdUseCase } from './GetJourneyByIdUseCase';

export const getJourneyByIdUseCase = new GetJourneyByIdUseCase(
  getStagesByJourneyIdUseCase,
  new ApiJourneyRepository()
);