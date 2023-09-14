function renderGameBoards(game) {
  const player1Board = document.getElementById('gameboard1-container');
  const player2Board = document.getElementById('gameboard2-container');

  player1Board.innerHTML = '';
  player2Board.innerHTML = '';

  renderBoard(game.gameboard1, player1Board);
  renderBoard(game.gameboard2, player2Board, true);
}

function renderBoard(gameboard, container, hideShips) {
  for (let row = 0; row < gameboard.board.length; row++) {
    for (let col = 0; col < gameboard.board[row].length; col++) {
      const cell = createCell(row, col, gameboard.board[row][col], hideShips);
      container.appendChild(cell);
    }
  }
}

function createCell(row, col, content, hideShips) {
  const cell = document.createElement('div');
  cell.setAttribute('data-row', row);
  cell.setAttribute('data-col', col);

  if (content === null) {
    cell.classList.add('cell');
  } else {
    if (!hideShips) {
      cell.classList.add('ship');
    }else {
      cell.classList.add('cell');
    }
  }

  return cell;
}

function statusMessage(message) {
  const messageContainer = document.getElementById('message-container');
  messageContainer.textContent = message;
}

export { renderGameBoards, statusMessage };