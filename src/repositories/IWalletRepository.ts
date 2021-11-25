export interface IWalletRepository {
  getBalanceByUserTeamId(userTeamId: number): Promise<number>;
}