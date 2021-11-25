import { IStageRepository } from "../../repositories/IStageRepository";

export class GetStagesByJourneyIdUseCase {
  constructor(
    public stagesRepository: IStageRepository
  ) {}
  
  async execute(journeyId: number) {
    const response = await this.stagesRepository.getByJourney(journeyId);
    return response;
  }
}