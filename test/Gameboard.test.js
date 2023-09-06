import { Gameboard } from '../src/Gameboard';
import { Ship } from '../src/Ship';

describe('placing a ship at a specific coordinates', () => {
  test('a ship is correctly placed in to the gameboard', () => {
    const gameboard = Gameboard();
    const coordinates = [{row: 0, col: 0}, {row: 1, col: 0}, {row: 2, col: 0}, {row: 3, col: 0}, {row: 4, col: 0}];
    const ship = Ship(5);
    gameboard.placeShip(ship, coordinates);
    const board = gameboard.board;
    expect(board[0][0]).toBe(ship);
    expect(board[1][0]).toBe(ship);
    expect(board[2][0]).toBe(ship);
    expect(board[3][0]).toBe(ship);
    expect(board[4][0]).toBe(ship);
  });

  test('placing a Shipe outside the boundaries of the gameboard is not allowed', () => {
    const gameboard = Gameboard();
    const coordinates = [{row: 10, col: 0}, {row: 10, col: 1}];
    const ship = Ship(2);
    gameboard.placeShip(ship, coordinates);
    const board = gameboard.board;
    const result = board.some(row => row.includes(ship));
    expect(result).toBeFalsy;
  });

  test('placing multiple ships on the gameboard without overlap', () => {
    const gameboard = Gameboard();
    const ship1Coordinates = [{row: 3, col: 2}, {row: 3, col: 3}, {row: 3, col: 4}];
    const ship2Coordinates = [{row: 5, col: 6}, {row: 5, col: 7}, {row: 5, col: 8}];
    const ship3Coordinates = [{row: 7, col: 1}, {row: 8, col: 1}, {row: 9, col: 1}];
    const ship1 = Ship(3);
    const ship2 = Ship(3);
    const ship3 = Ship(3);
      
    gameboard.placeShip(ship1, ship1Coordinates);
    gameboard.placeShip(ship2, ship2Coordinates);
    gameboard.placeShip(ship3, ship3Coordinates);
    const board = gameboard.board;
      
    expect(board[3][2]).toBe(ship1);
    expect(board[3][3]).toBe(ship1);
    expect(board[3][4]).toBe(ship1);
      
    expect(board[5][6]).toBe(ship2);
    expect(board[5][7]).toBe(ship2);
    expect(board[5][8]).toBe(ship2);
      
    expect(board[7][1]).toBe(ship3);
    expect(board[8][1]).toBe(ship3);
    expect(board[9][1]).toBe(ship3);
      
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        if (
          (row !== 3 && (col !== 2 && col !== 3 && col !== 4)) &&
          (row !== 5 && (col !== 6 && col !== 7 && col !== 8)) &&
          (row !== 7 && (col !== 1 && col !== 2 && col !== 3))
        ) {
            expect(board[row][col]).toBe(null);
        };
      }
    };
  });

});

describe('receiving attacks', () => {
  test('when an attack hits a ship, a ship\'s hit function is called', () => {
    const gameboard = Gameboard();
    const ship =  Ship(3);
    const coordinates = [{row: 3, col: 2}, {row: 3, col: 3}, {row: 3, col: 4}];
    const attack = [3, 2];
    gameboard.placeShip(ship, coordinates);
    const result = gameboard.receiveAttack(attack);
    expect(result).toBeTruthy();
    expect(ship.hit).toBe(1);
  });

  test('attacking the same coordinates multiple times is handled correctly', () => {
    const gameboard = Gameboard();
    const ship = Ship(3);
    const coordinates = [{row: 5, col: 6}, {row: 5, col: 7}, {row: 5, col: 8}];
    const attack = [5, 6];
      
    gameboard.placeShip(ship, coordinates);
      
    const result1 = gameboard.receiveAttack(attack);
    expect(result1).toBeTruthy();
    expect(ship.hit).toBe(1);
    
    // Second attack on the same coordinates
    const result2 = gameboard.receiveAttack(attack);
    expect(result2).toBeFalsy();
    expect(ship.hit).toBe(1);

    // Attack a different coordinate 
    const result3 = gameboard.receiveAttack([5, 7]);
    expect(result3).toBeTruthy();
    expect(ship.hit).toBe(2);
  });

});

describe('keeping track of missed attacks', () => {
  test('missed coordinates are recorded correctly', () => {
    const gameboard = Gameboard();
    const ship =Ship(3);
    const coordinates = [{row: 5, col: 6}, {row: 5, col: 7}, {row: 5, col: 8}];
    const attack = [5, 4];

    gameboard.placeShip(ship, coordinates);
    const result = gameboard.receiveAttack(attack);
    expect(result).toFalsy;

    const missedAttacks = gameboard.missedAttacks;

    let missedAttackFound = false
    for (const missedAttack of missedAttacks) {
      if (missedAttack === attack) {
        missedAttackFound = true;
          break;
      };
    };

    expect(missedAttackFound).toBeTruthy();
  });

  test('missed coordinates are not counted as hits', () => {
    const gameboard = Gameboard();
    const ship =Ship(3);
    const coordinates = [{row: 5, col: 6}, {row: 5, col: 7}, {row: 5, col: 8}];
    const attack = [5, 4];

    gameboard.placeShip(ship, coordinates);
    const result = gameboard.receiveAttack(attack);
    expect(result).toFalsy;

    const missedAttacks = gameboard.missedAttacks;

    let missedAttackFound = false
    for (const missedAttack of missedAttacks) {
      if (missedAttack === attack) {
        missedAttackFound = true;
          break;
      };
    };

    expect(missedAttackFound).toBeTruthy();
    expect(ship.hit).toBe(0)
  });
 
});

describe('check if all ships have been sunk', () => {
  test('when all ships have been sunk, the gameboard reports accordingly', () => {
    const gameboard = Gameboard();
    const destroyer = Ship(3);
    const cruiser = Ship(2);
    
    const destroyerCoordinates = [{row: 1, col: 1}, {row: 1, col: 2}, {row: 1, col: 3}];
    const cruiserCoordinates = [{row: 3, col: 5}, {row: 3, col: 6}];
    
    gameboard.placeShip(destroyer, destroyerCoordinates);
    gameboard.placeShip(cruiser, cruiserCoordinates);
    
    gameboard.receiveAttack([1, 1]); 
    gameboard.receiveAttack([1, 2]); 
    gameboard.receiveAttack([1, 3]);
    
    gameboard.receiveAttack([3, 5]); 
    gameboard.receiveAttack([3, 6]); 
    
    const allShipsSunk = gameboard.allShipsSunk();
    
    expect(allShipsSunk).toBeTruthy();
  });

  test('when all ships have been sunk, the gameboard reports accordingly', () => {
    const gameboard = Gameboard();
    const destroyer = Ship(3);
    const cruiser = Ship(2);
    
    const destroyerCoordinates = [{row: 1, col: 1}, {row: 1, col: 2}, {row: 1, col: 3}];
    const cruiserCoordinates = [{row: 3, col: 5}, {row: 3, col: 6}];
    
    gameboard.placeShip(destroyer, destroyerCoordinates);
    gameboard.placeShip(cruiser, cruiserCoordinates);
    
    gameboard.receiveAttack([1, 1]); 
    gameboard.receiveAttack([1, 2]); 
    gameboard.receiveAttack([1, 3]);
    
    gameboard.receiveAttack([3, 5]); 
    gameboard.receiveAttack([3, 7]); 
    
    const allShipsSunk = gameboard.allShipsSunk();
    
    expect(allShipsSunk).toBeFalsy();
  })
});