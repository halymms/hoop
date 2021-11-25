import { Stage } from "../../entities/Stage";
import api from "../../services/api";
import { IStageRepository } from "../IStageRepository";

export class ApiStageRepository implements IStageRepository {
  async getByJourney(journeyId: number): Promise<Stage[]> {
    try {
      const response = await api.get(`/stage/journey/${journeyId}`);
      const stages = response.data as Stage[];
      return stages;
    } catch (error) {
      let errorMessage = "Erro. Tente novamente mais tarde";
      if (error?.response?.data?.message) {
        errorMessage = error?.response?.data?.message;
      }
      throw Error(errorMessage);
    }
  }
}