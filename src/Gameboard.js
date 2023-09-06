/*
function Gameboard() {
    let board = [
        [0, 0 , 0, 0, 0, 0, 0 , 0, 0, 0], 
        [0, 0 , 0, 0, 0, 0, 0 , 0, 0, 0],
        [0, 0 , 0, 0, 0, 0, 0 , 0, 0, 0],
        [0, 0 , 0, 0, 0, 0, 0 , 0, 0, 0], 
        [0, 0 , 0, 0, 0, 0, 0 , 0, 0, 0],
        [0, 0 , 0, 0, 0, 0, 0 , 0, 0, 0],
        [0, 0 , 0, 0, 0, 0, 0 , 0, 0, 0], 
        [0, 0 , 0, 0, 0, 0, 0 , 0, 0, 0],
        [0, 0 , 0, 0, 0, 0, 0 , 0, 0, 0],
        [0, 0 , 0, 0, 0, 0, 0 , 0, 0, 0]
    ];

    let missedAttacks = []

    function placeShip(ship, positions) {
        for (const position of positions) {
            if (
                position.row >= 0 &&
                position.row < board.length &&
                position.col >= 0 &&
                position.col < board[position.row].length &&
                board[position.row][position.col] === 0
              ) {
                board[position.row][position.col] = ship.name;
              }
            }
        };

        function receiveAttack(attackCoordnate, coordinates, ship) {
            for (const coordinate of coordinates) {
                if (coordinate.row === attackCoordnate[0] && coordinate.col === attackCoordnate[1]){
                    ship.Hit()
                    return true
                }
            }
            
            missedAttacks.push(attackCoordnate)
            return false;
        };
    
    return {
        board,
        placeShip,
        receiveAttack,
        missedAttacks
    }
}

export { Gameboard }

*/

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