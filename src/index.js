import './style.css'
import { Game } from './Game';
import { renderGameBoards, statusMessage } from './DOM';

const game = Game();

game.startGame()

renderGameBoards(game);

function handleAttack(event) {
  const status = document.getElementById('message-container')
  status.textContent = "You shot and...it\'s"
  const clickedCell = event.target;
  const coordinates = getCellCoordinates(clickedCell);

  const player1Attack = game.player1.takeTurn(coordinates);
  const result = player1Attack.result;

  updateGameBoardUI('gameboard2-container', coordinates, result);
  setTimeout(() => {
    if(result) {
      status.textContent += " hit!"
    }else {
      status.textContent += " miss!"
    }
  }, 2000)

  if (game.gameboard2.allShipsSunk()) {
    endGame('Player 1');
  }else {
    setTimeout(aiTurn, 3000);
  }
}

function aiTurn() {
  const status = document.getElementById('message-container')
  status.textContent = 'Your enemy is aiming...'
  const player2Attack = game.player2.takeTurn();
  const result = player2Attack.result;
  const coordinates = player2Attack.attack;

  updateGameBoardUI('gameboard1-container', coordinates, result);
  setTimeout(() => {
    if(result) {
      status.textContent = "Enemy fire a shot and it's a hit!"
    }else {
      status.textContent = "Enemy fire a shot and it's a miss!"
    }
  }, 2000)
  if (game.gameboard1.allShipsSunk()) {
    endGame('Player 2');
  }
}

document.getElementById('gameboard2-container').addEventListener('click', handleAttack);

function getCellCoordinates(cell) {
  const row = parseInt(cell.getAttribute('data-row'));
  const col = parseInt(cell.getAttribute('data-col'));
  return [row, col ];
}

function updateGameBoardUI(gameboardContainer, coordinates, result) {
  const cell = document.getElementById(gameboardContainer).querySelector(`[data-row="${coordinates[0]}"][data-col="${coordinates[1]}"]`);
  console.log('called')
  if (!result) {
    cell.classList.add('miss');
  } else {
    cell.classList.add('hit');
  }


  cell.classList.add('disabled');
  cell.removeEventListener('click', handleAttack);
}

function endGame(winner) {
  statusMessage(winner);
}