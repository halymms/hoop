import api from '../../services/api';
import { IWalletRepository } from '../IWalletRepository';
import AsyncStorage from "@react-native-async-storage/async-storage";

export class ApiWalletRepository implements IWalletRepository {
  async getBalanceByUserTeamId(userTeamId: number): Promise<number> {
    try {
      const token = await AsyncStorage.getItem("@storage_Token"); 
      const response = await api.get(`/wallet/user_team/${userTeamId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data)
      if (response.data.length === 0) {
        return 0;
      }
      const balance = response.data[0].amount;
      return balance;
    } catch (error) {
      let errorMessage = "Erro. Tente novamente mais tarde";
      if (error?.response?.data?.message) {
        errorMessage = error?.response?.data?.message;
      }
      throw Error(errorMessage);
    }
  }
}