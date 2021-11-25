import { Stadium } from "./Stadium";

export class Team {
  constructor(
    public id: number,
    public stadium: Stadium,
    public key: string,
    public active: boolean,
    public city: string,
    public name: string,
    public conference: string,
    public image: string
  ) {}
}