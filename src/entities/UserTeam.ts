import { User } from "./User";

export class UserTeam {
  constructor(
    public id: number,
    public user: User,
    public name: string,
    public total_points?: number|null
  ) {}
}