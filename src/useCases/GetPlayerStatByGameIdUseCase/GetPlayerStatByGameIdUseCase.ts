import { IPlayerStatRepository } from "../../repositories/IPlayerStatRepository";

export class GetPlayerStatByGameIdUseCase {
  constructor(
    public playerStatRepository: IPlayerStatRepository 
  ) {}
  
  async execute(gameId: number, playerId: number,) {
    const response = await this.playerStatRepository.getByGameId(playerId, gameId);
    return response;
  }
}