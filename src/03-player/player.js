import { Gameboard } from "../02-gameboard/gameboard.js";

export class Player {
  constructor(name) {
    this.name = name;
  }

  game = Gameboard();
}
