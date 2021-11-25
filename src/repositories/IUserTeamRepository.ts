import { UserTeam } from '../entities/UserTeam';

export interface IUserTeamRepository {
    findById(id: number): Promise<UserTeam>;
}