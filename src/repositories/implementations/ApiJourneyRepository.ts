import { Journey } from "../../entities/Journey";
import api from "../../services/api";
import { IJourneyRepository } from "../IJourneyRepository";

export class ApiJourneyRepository implements IJourneyRepository {
  async getAllJourneys(): Promise<Journey[]> {
    try {
      const response = await api.get('/journey');
      const journeys = response.data as Journey[];
      return journeys;
    } catch (error) {
      let errorMessage = "Erro. Tente novamente mais tarde";
      if (error?.response?.data?.message) {
        errorMessage = error?.response?.data?.message;
      }
      throw Error(errorMessage);
    }
  }
}