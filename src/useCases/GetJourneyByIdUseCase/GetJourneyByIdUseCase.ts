import { IJourneyRepository } from "../../repositories/IJourneyRepository";
import { GetStagesByJourneyIdUseCase } from "../GetStagesByJourneyIdUseCase/GetStagesByJourneyIdUseCase";

export class GetJourneyByIdUseCase {
  constructor(
    public getStagesByJourneyIdUseCase: GetStagesByJourneyIdUseCase,
    public journeyRepository: IJourneyRepository
  ) {}
  
  async execute(journeyId: number) {
    const allJourneys = await this.journeyRepository.getAllJourneys();
    const journey = allJourneys.find(journeyItem => journeyItem.id === journeyId);
    if (!journey) return null;
    const stages = await this.getStagesByJourneyIdUseCase.execute(journey.id);
    journey.stages = stages;
    return journey;
  }
}