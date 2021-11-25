import { Game } from "./Game";

export class Stage {
  constructor(
      public id: number,
      public game: Game[],
      public name: string,
      public start_date: string,
      public end_date: string 
  ) {}
}