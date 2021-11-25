import { ILineUpRepository } from "../../repositories/ILineUpRepository";
import { UpdateLineupDTO } from "./UpdateLineupDTO";

export class UpdateLineupUseCase {
  constructor(
    public lineupRepository: ILineUpRepository    
  ) {}
  
  async execute(data: UpdateLineupDTO, lineupId: number) {
    await this.lineupRepository.updateLineup(data, lineupId);
  }
}