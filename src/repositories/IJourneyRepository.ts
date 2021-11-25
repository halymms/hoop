import { Journey } from "../entities/Journey";

export interface IJourneyRepository {
  getAllJourneys(): Promise<Journey[]>;
}