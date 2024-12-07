import { GameController } from "./GameController.js";

describe("Checking GameController players", () => {
  let gameplay = GameController("User", "Computer");

  test("Should display Player names", () => {
    expect(gameplay.getActivePlayer().name).toBe("User");
  });

  test("Should switch player", () => {
    gameplay.playRound([0, 0]);
    expect(gameplay.getActivePlayer().name).toBe("Computer");
  });

  test("Player 1 should attempt to hit player2 board", () => {
    gameplay.playRound([0, 0]);
    expect(gameplay.getActivePlayer().game.getBoard()[0][0].timesHit).toBe(1);
  });

  test("Player 1 should store player 2 missed hit", () => {
    gameplay.playRound([9, 9]);

    const shouldHave = [
      [0, 0],
      [9, 9],
    ];
    expect(gameplay.getActivePlayer().game.missedAttacks).toEqual(shouldHave);
  });
});

describe("Calculate Winners", () => {
  let gameplay = GameController("User", "Computer");

  test("Should say winner when all ships sunk", () => {
    /* player 1 
    [0, 0], [0, 4]
    [5, 5], [5, 8]
    [4, 3], [4, 5]
    [8, 7], [8, 9]
    [2, 4], [2, 5]

    */

    gameplay.playRound([0, 0]);
    gameplay.playRound([0, 0]);
    gameplay.playRound([0, 1]);
    gameplay.playRound([0, 1]);
    gameplay.playRound([0, 2]);
    gameplay.playRound([0, 2]);
    gameplay.playRound([0, 3]);
    gameplay.playRound([0, 3]);
    gameplay.playRound([0, 4]);
    gameplay.playRound([0, 4]);
    gameplay.playRound([5, 5]);
    gameplay.playRound([5, 5]);
    gameplay.playRound([5, 6]);
    gameplay.playRound([5, 6]);
    gameplay.playRound([5, 7]);
    gameplay.playRound([5, 7]);
    gameplay.playRound([5, 8]);
    gameplay.playRound([5, 8]);
    gameplay.playRound([4, 3]);
    gameplay.playRound([4, 3]);
    gameplay.playRound([4, 4]);
    gameplay.playRound([4, 4]);
    gameplay.playRound([4, 5]);
    gameplay.playRound([4, 5]);
    gameplay.playRound([8, 7]);
    gameplay.playRound([8, 7]);
    gameplay.playRound([8, 8]);
    gameplay.playRound([8, 8]);
    gameplay.playRound([8, 9]);
    gameplay.playRound([8, 9]);
    gameplay.playRound([2, 4]);
    gameplay.playRound([2, 4]);

    gameplay.playRound([2, 5]);

    expect(gameplay.playRound([2, 5])).toBe("Computer is Winner");
  });
});

describe("Print Board", () => {
  let gameplay = GameController("User", "Computer");

  let playerOneShipLocation = [
    [0, 0],
    [0, 4],
    [(5, 5)],
    [5, 8],
    [(4, 3)],
    [4, 5],
    [(8, 7)],
    [8, 9],
    [(2, 4)],
    [2, 5],
  ];

  let playerTwoShipLocation = [
    [5, 0],
    [9, 0],
    [(0, 4)],
    [0, 7],
    [(3, 7)],
    [3, 9],
    [(5, 7)],
    [7, 7],
    [(0, 9)],
    [1, 9],
  ];
  function checkBoard(board, playerLocation) {
    for (let i = 0; i < playerLocation.length; i++) {
      let [x, y] = playerLocation[i];
      if (Array.isArray(board[x][y])) {
        return false;
      }
    }
    return true;
  }

  it(`Should print active player's board`, () => {
    expect(
      checkBoard(
        gameplay.getActivePlayer().game.getBoard(),
        playerOneShipLocation
      )
    ).toBeTruthy();
  });

  it("Should print opponent board", () => {
    let oppBoard = [
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
    ];

    let opp = gameplay.getOppBoard();
    expect(opp).toStrictEqual(oppBoard);
  });

  it("Should have missed coordinates on opponent board", () => {
    let oppBoard = [
      [[], [], [], [], [], [], [], [], [], ["x"]],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
    ];

    gameplay.playRound([9, 9]);
    gameplay.playRound([9, 9]);

    let opp = gameplay.getOppBoard();

    expect(opp).toStrictEqual(oppBoard);
  });

  it("Should have missed coordinates on player board", () => {
    gameplay.playRound([9, 9]);
    gameplay.playRound([9, 9]);

    let currentPlayer = [
      [
        { name: "Carrier", length: 5, timesHit: 0, sunk: false },
        { name: "Carrier", length: 5, timesHit: 0, sunk: false },
        { name: "Carrier", length: 5, timesHit: 0, sunk: false },
        { name: "Carrier", length: 5, timesHit: 0, sunk: false },
        { name: "Carrier", length: 5, timesHit: 0, sunk: false },
        [],
        [],
        [],
        [],
        [],
      ],
      [[], [], [], [], [], [], [], [], [], []],
      [
        [],
        [],
        [],
        [],
        { name: "Patrol Boat", length: 2, timesHit: 0, sunk: false },
        { name: "Patrol Boat", length: 2, timesHit: 0, sunk: false },
        [],
        [],
        [],
        [],
      ],
      [[], [], [], [], [], [], [], [], [], []],
      [
        [],
        [],
        [],
        { name: "Destroyer", length: 3, timesHit: 0, sunk: false },
        { name: "Destroyer", length: 3, timesHit: 0, sunk: false },
        { name: "Destroyer", length: 3, timesHit: 0, sunk: false },
        [],
        [],
        [],
        [],
      ],
      [
        [],
        [],
        [],
        [],
        [],
        { name: "Battleship", length: 4, timesHit: 0, sunk: false },
        { name: "Battleship", length: 4, timesHit: 0, sunk: false },
        { name: "Battleship", length: 4, timesHit: 0, sunk: false },
        { name: "Battleship", length: 4, timesHit: 0, sunk: false },
        [],
      ],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        { name: "Submarine", length: 3, timesHit: 0, sunk: false },
        { name: "Submarine", length: 3, timesHit: 0, sunk: false },
        { name: "Submarine", length: 3, timesHit: 0, sunk: false },
      ],
      [[], [], [], [], [], [], [], [], [], ["x"]],
    ];

    let activePlayerBoard = gameplay.getActivePlayer().game.getBoard();

    expect(activePlayerBoard).toEqual(currentPlayer);
  });

  it("Should find out which is player 1, and which is player 2", () => {
    let [player1, player2] = gameplay.getPlayers();

    expect(player1).toBe("User");
    expect(player2).toBe("Computer");
  });
});
