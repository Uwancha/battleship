import { Game } from '../src/Game';

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = Game();
  });

  test('should create players and game boards', () => {
    game.startGame();

    expect(game.player1).toBeDefined();
    expect(game.player2).toBeDefined();
    expect(game.gameboard1).toBeDefined();
    expect(game.gameboard2).toBeDefined();

  });

  test('should set up game boards with ships', () => {
    game.startGame();

    
    expect(game.gameboard1.board[0][0]).toBeDefined();
    
    expect(game.gameboard2.board[8][8]).toBeDefined();
  });

});

