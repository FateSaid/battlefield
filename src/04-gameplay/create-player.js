import { Player } from "../03-player/player.js";

export function createPlayer(name) {
  let player = new Player(name);
  return player;
}
