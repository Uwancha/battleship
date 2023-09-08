import { Game } from '../src/Game';

describe('Game', () => {
  let game;
  let ship1, ship2, ship3, ship4;
  let player1, player2

  beforeEach(() => {
    game = Game();
    ship1 = { length: 3, hit: 0, sunk: false, Hit: jest.fn(), isSunk: jest.fn() };
    ship2 = { length: 4, hit: 0, sunk: false, Hit: jest.fn(), isSunk: jest.fn() };
    ship3 = { length: 2, hit: 0, sunk: false, Hit: jest.fn(), isSunk: jest.fn() };
    ship4 = { length: 5, hit: 0, sunk: false, Hit: jest.fn(), isSunk: jest.fn() };
    
    game.player1 = { takeTurn: jest.fn() };
    game.player2 = { takeTurn: jest.fn() };
     
     

    jest.spyOn(game.gameboard1, 'allShipsSunk').mockReturnValue(false);
    jest.spyOn(game.gameboard2, 'allShipsSunk').mockReturnValue(false);
  });

  test('startGame initializes the game', () => {
    game.startGame();

    expect(game.player1).toBeDefined();
    expect(game.player2).toBeDefined();
    expect(game.gameboard1).toBeDefined();
    expect(game.gameboard2).toBeDefined();

  });

  test('startGame progresses the game loop until the game ends', () => {
    game.gameboard1.allShipsSunk.mockReturnValueOnce(false).mockReturnValueOnce(false).mockReturnValueOnce(true);
    game.gameboard2.allShipsSunk.mockReturnValueOnce(false).mockReturnValueOnce(false).mockReturnValueOnce(false);

    game.player1.takeTurn.mockReturnValueOnce({ attack: [5, 9], result: false });
    game.player2.takeTurn.mockReturnValueOnce({ attack: [2, 8], result: false });

    game.startGame();

    expect(game.player1.takeTurn).toHaveBeenCalled();
    expect(game.player2.takeTurn).toHaveBeenCalled();
    expect(game.gameboard1.receiveAttack).toHaveBeenCalledWith([5, 9]);
    expect(game.gameboard2.receiveAttack).toHaveBeenCalledWith([2, 8]);
    expect(game.gameboard1.allShipsSunk).toHaveBeenCalled();
    expect(game.gameboard2.allShipsSunk).toHaveBeenCalled();

  });

});

