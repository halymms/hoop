import { Stage } from "../entities/Stage";

export interface IStageRepository {
  getByJourney(journeyId: number): Promise<Stage[]>;
}