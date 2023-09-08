import { Player } from './Player';
import { Gameboard } from './Gameboard';
import { Ship } from './Ship';

function Game() {
  const gameboard1 = Gameboard();
  const gameboard2 = Gameboard();
  const player1 = Player(gameboard2);
  const player2 = Player(gameboard1);

  const ship1 = Ship(3);
  const ship2 = Ship(4);
  const ship3 = Ship(2);
  const ship4 = Ship(5);

  function startGame() {
    
    gameboard1.placeShip(ship1, [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }]);
    gameboard1.placeShip(ship2, [{ row: 5, col: 5 }, { row: 6, col: 5 }, { row: 7, col: 5 }, { row: 8, col: 5 }]);
    
    gameboard2.placeShip(ship3, [{ row: 2, col: 3 }, { row: 2, col: 4 }]);
    gameboard2.placeShip(ship4, [{ row: 8, col: 8 }, { row: 8, col: 9 }, { row: 8, col: 10 }, { row: 8, col: 11 }, { row: 8, col: 12 }]);

    while (!gameboard1.allShipsSunk() && !gameboard2.allShipsSunk()) {
      const { attack: attack1, result: result1 } = player1.takeTurn();
      const { attack: attack2, result: result2 } = player2.takeTurn();

      gameboard1.receiveAttack(attack1);
      gameboard2.receiveAttack(attack2);
    }
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
