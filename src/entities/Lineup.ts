import { Player } from "./Player";
import { UserTeam } from "./UserTeam";

export class Lineup {
  constructor(
    public id: number,
    public points: string|null,
    public gain: string|null,
    public formation: string,
    public captain: number|Player,
    public stage: number,
    public userTeam: number|UserTeam,
    public player: Player[]
  ) {}
}