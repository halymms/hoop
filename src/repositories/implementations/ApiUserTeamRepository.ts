import { UserTeam } from '../../entities/UserTeam';
import api from '../../services/api';
import { IUserTeamRepository } from '../IUserTeamRepository';
import AsyncStorage from "@react-native-async-storage/async-storage";

export class ApiUserTeamRepository implements IUserTeamRepository {
  async findById(id: number): Promise<UserTeam> {
    try {
      const token = await AsyncStorage.getItem("@storage_Token"); 
      const response = await api.get(`/user_team/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const userTeam = response.data as UserTeam;
      return userTeam;
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