import { ILineUpRepository } from "../../repositories/ILineUpRepository";
import { CreateLineupDTO } from "./CreateLineupDTO";

export class CreateLineupUseCase {
  constructor(
    public lineupRepository: ILineUpRepository    
  ) {}
  
  async execute(data: CreateLineupDTO) {
    const lineupId = await this.lineupRepository.createLineUp(data);
    return lineupId;
  }
}