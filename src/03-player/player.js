import { Gameboard } from "../02-gameboard/gameboard";

export class Player {
  constructor(name) {
    this.name = name;
  }

  game = Gameboard();
}
