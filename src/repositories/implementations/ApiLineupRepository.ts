import { Lineup } from "../../entities/Lineup";
import { Player } from "../../entities/Player";
import api from "../../services/api";
import { CreateLineupDTO } from "../../useCases/CreateLineupUseCase/CreateLineupDTO";
import { UpdateLineupDTO } from "../../useCases/UpdateLineupUseCase/UpdateLineupDTO";
import { ILineUpRepository } from "../ILineUpRepository";
import AsyncStorage from "@react-native-async-storage/async-storage";


interface ILineupApiPlayerProps {
    id: number,
    status: string,
    team_initials: string,
    jersey: number,
    position_category: string,
    position: string,
    first_name: string,
    last_name: string,
    height: number,
    weight: number,
    birth_date: string,
    experience: number,
    image: string,
    birth_city: string,
    birth_state: string,
    birth_country: string,
    price: number|null,
    average_points: string,
    injury_status: string|null,
    team: number
}

type player = {
  player: ILineupApiPlayerProps;
  holder: boolean
}
  
interface ILineupApiProps {
  id: number;
  points: string|null;
  gain: string|null;
  formation: string;
  captain: ILineupApiPlayerProps;
  stage: number;
  userTeam: number;
  player: player[];
}

export class ApiLineupRepository implements ILineUpRepository {

  async createLineUp(data: CreateLineupDTO): Promise<number> {
    try {
      const token = await AsyncStorage.getItem("@storage_Token"); 
      
      const response = await api.post('/lineup/', data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const lineupId = response.data.id;
      return lineupId;
    } catch (error) {
      console.error(error)
      let errorMessage = "Erro. Tente novamente mais tarde";
      if (error?.response?.data?.message) {
        errorMessage = error?.response?.data?.message;
      }
      throw Error(errorMessage);  
    }
  }

  async updateLineup(data: UpdateLineupDTO, lineupId: number): Promise<void> {
    try {
      const token = await AsyncStorage.getItem("@storage_Token"); 
      const response =await api.patch(`/lineup/${lineupId}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log("updated: ", response.data)
    } catch (error) {
      console.error(error)
      let errorMessage = "Erro. Tente novamente mais tarde";
      if (error?.response?.data?.message) {
        errorMessage = error?.response?.data?.message;
      }
      throw Error(errorMessage);  
    }
  }

  async getLineupsByUserTeamAndStage(userTeamId: number, stageId: number): Promise<Lineup[]> {
    try {
      const token = await AsyncStorage.getItem("@storage_Token"); 
      const response = await api.get(`/lineup/user_team/${userTeamId}/stage/${stageId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const lineups = response.data.map((lineup: ILineupApiProps) => {
        const newPlayers = lineup.player.map((player: player, index: number) => {
          const holder = lineup.player[index].holder;
          const newPlayer = new Player(
            player.player.id,
            player.player.status,
            player.player.team_initials,
            player.player.jersey,
            player.player.position_category,
            player.player.position,
            player.player.first_name,
            player.player.last_name,
            player.player.height,
            player.player.weight,
            player.player.birth_date,
            player.player.experience,
            player.player.image,
            player.player.birth_city,
            player.player.birth_state,
            player.player.birth_country,
            player.player.price ? String(player.player.price) : null,
            player.player.average_points,
            player.player.injury_status,
            player.player.team,
          );
          newPlayer.setHolder(holder);
          return newPlayer;
        });
        return new Lineup(
          lineup.id,
          lineup.points,
          lineup.gain,
          lineup.formation,
          new Player(
            lineup.captain.id,
            lineup.captain.status,
            lineup.captain.team_initials,
            lineup.captain.jersey,
            lineup.captain.position_category,
            lineup.captain.position,
            lineup.captain.first_name,
            lineup.captain.last_name,
            lineup.captain.height,
            lineup.captain.weight,
            lineup.captain.birth_date,
            lineup.captain.experience,
            lineup.captain.image,
            lineup.captain.birth_city,
            lineup.captain.birth_state,
            lineup.captain.birth_country,
            lineup.captain.price ? String(lineup.captain.price) : "0",
            lineup.captain.average_points,
            lineup.captain.injury_status,
            lineup.captain.team,
          ),
          lineup.stage,
          lineup.userTeam,
          newPlayers
        )
      });
      return lineups;
    } catch (error) {
      console.error(error)
      let errorMessage = "Erro. Tente novamente mais tarde";
      if (error?.response?.data?.message) {
        errorMessage = error?.response?.data?.message;
      }
      throw Error(errorMessage);  
    }
  }
}