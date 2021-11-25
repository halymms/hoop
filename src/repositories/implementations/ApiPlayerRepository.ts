import { Player } from "../../entities/Player";
import api from "../../services/api";
import { IPlayerRepository } from "../IPlayerRepository";

interface IApiPlayerProps {
  id: number;
  status: string;
  team_initials: string;
  jersey: number;
  position_category: string;
  position: string;
  first_name: string;
  last_name: string;
  height: number;
  weight: number;
  birth_date: string;
  experience: number;
  image: string;
  birth_city: string;
  birth_state: string;
  birth_country: string;
  price: string|null;
  average_points: string|null;
  injury_status: boolean;
  team: number;
}

export class ApiPlayerRepository implements IPlayerRepository {
  async getAllPlayers(): Promise<Player[]> {
    try {
      const response = await api.get('/player');
      const rawPlayers = response.data;
      const players = rawPlayers.map((rawPlayer: IApiPlayerProps) => {
        return new Player(
          rawPlayer.id,
          rawPlayer.status,
          rawPlayer.team_initials,
          rawPlayer.jersey,
          rawPlayer.position_category,
          rawPlayer.position,
          rawPlayer.first_name,
          rawPlayer.last_name,
          rawPlayer.height,
          rawPlayer.weight,
          rawPlayer.birth_date,
          rawPlayer.experience,
          rawPlayer.image,
          rawPlayer.birth_city,
          rawPlayer.birth_state,
          rawPlayer.birth_country,
          rawPlayer.price,
          rawPlayer.average_points,
          rawPlayer.injury_status,
          rawPlayer.team,
        );
      });
      return players;
    } catch (error) {
      console.log(error)
      let errorMessage = "Erro. Tente novamente mais tarde";
      if (error?.response?.data?.message) {
        errorMessage = error?.response?.data?.message;
      }
      throw Error(errorMessage);
    }
  }
}