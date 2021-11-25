import { ApiStageRepository } from '../../repositories/implementations/ApiStageRepository';
import { GetStagesByJourneyIdUseCase } from './GetStagesByJourneyIdUseCase';

export const getStagesByJourneyIdUseCase = new GetStagesByJourneyIdUseCase(
  new ApiStageRepository()
);