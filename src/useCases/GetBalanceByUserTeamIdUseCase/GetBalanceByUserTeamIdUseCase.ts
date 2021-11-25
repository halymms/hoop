import { IWalletRepository } from "../../repositories/IWalletRepository";

export class GetBalanceByUserTeamIdUseCase {
  constructor(
    public walletRepository: IWalletRepository    
  ) {}
  
  async execute(userTeamId: number) {
    const balance = await this.walletRepository.getBalanceByUserTeamId(userTeamId);
    return balance;
  }
}