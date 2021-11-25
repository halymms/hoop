import { ApiJourneyRepository } from '../../repositories/implementations/ApiJourneyRepository';
import { getStagesByJourneyIdUseCase } from '../GetStagesByJourneyIdUseCase';
import { GetCurrentJourneyUseCase } from './GetCurrentJourneyUseCase';

export const getCurrentJourneyUseCase = new GetCurrentJourneyUseCase(
  getStagesByJourneyIdUseCase,
  new ApiJourneyRepository()
);