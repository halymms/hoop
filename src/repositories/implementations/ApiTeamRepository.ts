import { Team } from "../../entities/Team";
import api from "../../services/api";
import { ITeamRepository } from "../ITeamRepository";

export class ApiTeamRepository implements ITeamRepository {
  async getAllTeams(): Promise<Team[]> {
    try {
      const response = await api.get('/team');
      const teams = response.data as Team[];
      return teams;
    } catch (error) {
      let errorMessage = "Erro. Tente novamente mais tarde";
      if (error?.response?.data?.message) {
        errorMessage = error?.response?.data?.message;
      }
      throw Error(errorMessage);
    }
  }
}