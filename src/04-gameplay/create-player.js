import { Player } from "../03-player/player";

export function createPlayer(name) {
  let player = new Player(name);
  return player;
}
