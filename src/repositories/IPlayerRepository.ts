import { Player } from "../entities/Player";

export interface IPlayerRepository {
  getAllPlayers(): Promise<Player[]>;
}