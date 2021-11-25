import { PlayerStat } from "../entities/PlayerStat";

export interface IPlayerStatRepository {
  getByPlayerIdAndDate(playerId: number, date: string): Promise<PlayerStat|null>;
  getByGameId(playerId: number, gameId: number): Promise<PlayerStat|null>;
}