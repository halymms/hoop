import { IPlayerRepository } from "../../repositories/IPlayerRepository";

export class GetAllPlayersUseCase {
  constructor(
    public playerRepository: IPlayerRepository    
  ) {}

  async execute() {
    const allPlayers = await this.playerRepository.getAllPlayers();
    return allPlayers;
  }
}