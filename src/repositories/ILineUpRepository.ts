import { Lineup } from "../entities/Lineup";
import { CreateLineupDTO } from "../useCases/CreateLineupUseCase/CreateLineupDTO";
import { UpdateLineupDTO } from "../useCases/UpdateLineupUseCase/UpdateLineupDTO";

export interface ILineUpRepository {
  createLineUp(data: CreateLineupDTO): Promise<number>;
  updateLineup(data: UpdateLineupDTO, lineupId: number): Promise<void>;
  getLineupsByUserTeamAndStage(userTeamId: number, stageId: number): Promise<Lineup[]>;
}