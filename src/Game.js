import { createAIPlayer, createHumanPlayer } from './Player';
import { Gameboard } from './Gameboard';
import { Ship } from './Ship';

function Game() {
  const gameboard1 = Gameboard();
  const gameboard2 = Gameboard();
  const player1 = createHumanPlayer(gameboard2);
  const player2 = createAIPlayer(gameboard1);

  const gameboard1Carrier = Ship(5);
  const gameboard1Battleship = Ship(4);
  const gameboard1Sbmarine = Ship(3);
  const gameboard1Destroyer = Ship(3);
  const gameboard1Patrol= Ship(2);
  

  const gameboard2Carrier = Ship(5);
  const gameboard2Battleship = Ship(4);
  const gameboard2Sbmarine = Ship(3);
  const gameboard2Destroyer = Ship(3);
  const gameboard2Patrol= Ship(2);
  
  function startGame() {

    gameboard1.placeShip(gameboard1Carrier, [
      { row: 0, col: 0 },
      { row: 0, col: 1 },
      { row: 0, col: 2 },
      { row: 0, col: 3 },
      { row: 0, col: 4 },
    ]);
    gameboard1.placeShip(gameboard1Battleship, [
      { row: 5, col: 5 },
      { row: 6, col: 5 },
      { row: 7, col: 5 },
      { row: 8, col: 5 },
    ]);
    gameboard1.placeShip(gameboard1Sbmarine, [
      { row: 2, col: 0 },
      { row: 2, col: 1 },
      { row: 2, col: 2 },
    ]);
    gameboard1.placeShip(gameboard1Destroyer, [
      { row: 5, col: 9 },
      { row: 6, col: 9 },
      { row: 7, col: 9 },
    ]);
    gameboard1.placeShip(gameboard1Patrol, [
      { row: 4, col: 0 },
      { row: 4, col: 1 },
    ]);
  
    gameboard2.placeShip(gameboard2Carrier, [
      { row: 0, col: 0 },
      { row: 0, col: 1 },
      { row: 0, col: 2 },
      { row: 0, col: 3 },
      { row: 0, col: 4 },
    ]);
    gameboard2.placeShip(gameboard2Battleship, [
      { row: 5, col: 5 },
      { row: 6, col: 5 },
      { row: 7, col: 5 },
      { row: 8, col: 5 },
    ]);
    gameboard2.placeShip(gameboard2Sbmarine, [
      { row: 5, col: 9 },
      { row: 6, col: 9 },
      { row: 7, col: 9 },
    ]);
    gameboard2.placeShip(gameboard2Destroyer, [
      { row: 2, col: 0 },
      { row: 2, col: 1 },
      { row: 2, col: 2 },
    ]);
    gameboard2.placeShip(gameboard2Patrol, [
      { row: 4, col: 0 },
      { row: 4, col: 1 },
    ]);

  }

  return {
    startGame,
    player1,
    player2,
    gameboard1,
    gameboard2,
  };
}

export { Game };

