import { ApiWalletRepository } from '../../repositories/implementations/ApiWalletRepository';
import { GetBalanceByUserTeamIdUseCase } from './GetBalanceByUserTeamIdUseCase';

export const getBalanceByUserTeamIdUseCase = new GetBalanceByUserTeamIdUseCase(
  new ApiWalletRepository()
);