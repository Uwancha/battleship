const Gameboard = () => {
    const boardSize = 10;
    const board = Array(boardSize).fill(null).map(() => Array(boardSize).fill(null));
    const ships = [];
    const missedAttacks = [];
  
    const placeShip = (ship, coordinates) => {
      if (!isValidCoordinates(coordinates)) return false;
  
      for (const { row, col } of coordinates) {
        board[row][col] = ship;
      }
  
      ships.push(ship);
      return true;
    };
  
    const isValidCoordinates = (coordinates) => {
      for (const { row, col } of coordinates) {
        if (row < 0 || row >= boardSize || col < 0 || col >= boardSize || board[row][col] !== null) {
          return false;
        }
      }
      return true;
    };
  
    const receiveAttack = (attack) => {
      const [row, col] = attack;
  
      if (board[row][col] === null) {
        missedAttacks.push(attack);
        return false;
      }
  
      const ship = board[row][col];
      ship.Hit();
  
      if (ship.isSunk()) {
        ship.sunk = true;
      }

      board[row][col] = null;
  
      return true;
    };
  
    const allShipsSunk = () => {
      return ships.every(ship => ship.sunk);
    };
  
    return {
        board,
        placeShip,
        receiveAttack,
        allShipsSunk,
        missedAttacks,
    };
  };
  
  export { Gameboard };