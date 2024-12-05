import { GameController } from "../04-gameplay/GameController.js";
import {
  playerOneBoard,
  playerTwoBoard,
  resultOutput,
} from "../04-gameplay/dom.js";

export function ScreenController() {
  const game = GameController("User", "Computer");

  const playerTurn = (player) => resultOutput(player);

  const updateScreen = () => {
    playerOneBoard("");
    playerTwoBoard("");

    playerTurn(game.getActivePlayer());
  };
}
