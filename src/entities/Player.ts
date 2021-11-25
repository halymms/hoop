import { Team } from "./Team";

export class Player {
  public holder: boolean = true;

  constructor(
    public id: number,
    public status: string,
    public team_initials: string,
    public jersey: number,
    public positionCategory: string,
    public position: string,
    public firstName: string,
    public lastName: string,
    public height: number,
    public weight: number,
    public birthDate: string,
    public experience: number,
    public image: string,
    public birthCity: string,
    public birthState: string,
    public birthCountry: string,
    public price: string|null,
    public averagePoints: string|null,
    public injuryStatus: boolean,
    public teamNumber: number,
    public team?: Team,
  ) {}

  setHolder(isHolder: boolean) {
    this.holder = isHolder;
  }
}