import { IPlayerStatRepository } from "../../repositories/IPlayerStatRepository";

export class GetPlayerStatByPlayerIdAndDate {
  constructor(
    public playerStatRepository: IPlayerStatRepository
  ) {}
  
  async execute(playerId: number, date: string) {
    const playerStat = await this.playerStatRepository.getByPlayerIdAndDate(playerId, date);
    return playerStat;
  }
}