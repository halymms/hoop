import { PlayerStat } from '../../entities/PlayerStat';
import api from '../../services/api';
import { IPlayerStatRepository } from '../IPlayerStatRepository';
import AsyncStorage from "@react-native-async-storage/async-storage";

export class ApiPlayerStatRepository implements IPlayerStatRepository {
  async getByPlayerIdAndDate(playerId: number, date: string): Promise<PlayerStat|null> {
    try {
      console.log("Player id: ", playerId);

      const token = await AsyncStorage.getItem("@storage_Token"); 
      const response = await api.get(`/stat_player/${playerId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const playerStats = response.data as PlayerStat[];
      const playerStat = playerStats.find(stat => stat.game.day === date);
      return playerStat || null;
    } catch (error) {
      console.error(error)
      let errorMessage = "Erro. Tente novamente mais tarde";
      if (error?.response?.data?.message) {
        errorMessage = error?.response?.data?.message;
        console.log(errorMessage)
      }
      throw Error(errorMessage); 
    }
  }

  async getByGameId(playerId: number, gameId: number): Promise<PlayerStat|null> {
    try {
      console.log("Game id: ", gameId);
      console.log("player id: ", playerId)

      const token = await AsyncStorage.getItem("@storage_Token"); 

      const response = await api.get(`/stat_player/player/${playerId}/game/${gameId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data)
      const playerStats = response.data as PlayerStat[];
      const playerStat = playerStats[0];
      return playerStat || null;
    } catch (error) {
      console.error(error)
      let errorMessage = "Erro. Tente novamente mais tarde";
      if (error?.response?.data?.message) {
        errorMessage = error?.response?.data?.message;
        console.log(errorMessage)
      }
      throw Error(errorMessage); 
    }
  }
}