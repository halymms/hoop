import { IUserTeamRepository } from "../../repositories/IUserTeamRepository";

export class GetUserTeamByIdUseCase {
  constructor(
    public userTeamRepository: IUserTeamRepository    
  ) {}
  
  async execute(id: number) {
    const response = await this.userTeamRepository.findById(id);
    return response;
  }
}