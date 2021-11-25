import { IJourneyRepository } from "../../repositories/IJourneyRepository";
import { GetStagesByJourneyIdUseCase } from "../GetStagesByJourneyIdUseCase/GetStagesByJourneyIdUseCase";

export class GetCurrentJourneyUseCase {
  constructor(
    public getStagesByJourneyIdUseCase: GetStagesByJourneyIdUseCase,
    public journeyRepository: IJourneyRepository
  ) {}
  
  async execute() {
    const allJourneys = await this.journeyRepository.getAllJourneys();
    const currentJourney = allJourneys.find(journey => {
      const currentDate = new Date();
      const startDate = new Date(journey.start_date);
      const endDate = new Date(journey.end_date);
      return currentDate >= startDate && currentDate < endDate;
    });
    if (!currentJourney) return null;
    const stages = await this.getStagesByJourneyIdUseCase.execute(currentJourney.id);
    currentJourney.stages = stages;
    return currentJourney;
  }
}