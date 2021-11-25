import { Stage } from "./Stage";

export class Journey {
  constructor(
    public id: number,
    public name: string,
    public start_date: string,
    public end_date: string,
    public stages?: Stage[]
  ) {}
}