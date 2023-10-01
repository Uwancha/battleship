/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderGameBoards: () => (/* binding */ renderGameBoards)
/* harmony export */ });
/*function renderGameBoards(game) {
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

export { renderGameBoards, statusMessage }; */

function renderGameBoards(game) {
  var player1Board = document.getElementById('gameboard1-container');
  var player2Board = document.getElementById('gameboard2-container');
  player1Board.innerHTML = '';
  player2Board.innerHTML = '';
  renderBoard(game.gameboard1, player1Board, false); // Set hideShips to false for player 1
  renderBoard(game.gameboard2, player2Board, true); // Set hideShips to true for player 2

  // Add event listeners for ship placement by human player
  player1Board.addEventListener('dragstart', handleDragStart);
  player1Board.addEventListener('dragover', handleDragOver);
  player1Board.addEventListener('drop', handleDrop);
  player1Board.addEventListener('click', handleShipPlacement);
}
function renderBoard(gameboard, container, hideShips) {
  for (var row = 0; row < gameboard.board.length; row++) {
    for (var col = 0; col < gameboard.board[row].length; col++) {
      var cell = createCell(row, col, gameboard.board[row][col], hideShips);
      container.appendChild(cell);
    }
  }
}
function createCell(row, col, content, hideShips) {
  var cell = document.createElement('div');
  cell.setAttribute('data-row', row);
  cell.setAttribute('data-col', col);
  if (content === null) {
    cell.classList.add('cell');
    // Add drag event listener for empty cells
    cell.addEventListener('dragover', handleDragOver);
    cell.addEventListener('drop', handleDrop);
  } else {
    if (!hideShips) {
      cell.classList.add('ship');
      // Add drag event listener for ships
      cell.setAttribute('draggable', true);
      cell.addEventListener('dragstart', handleDragStart);
    } else {
      cell.classList.add('cell');
    }
  }
  return cell;
}

// Drag and drop event handlers
var dragShip = null;
function handleDragStart(event) {
  var cell = event.target;
  var row = cell.getAttribute('data-row');
  var col = cell.getAttribute('data-col');
  var ship = game.gameboard1.board[row][col];
  if (ship !== null) {
    dragShip = ship;
  }
}
function handleDragOver(event) {
  event.preventDefault();
}
function handleDrop(event) {
  event.preventDefault();
  var cell = event.target;
  var row = cell.getAttribute('data-row');
  var col = cell.getAttribute('data-col');
  if (dragShip !== null) {
    var coordinates = getShipCoordinates(parseInt(row), parseInt(col), dragShip.length, 'horizontal');
    var success = game.gameboard1.placeShip(dragShip, coordinates);
    if (success) {
      renderGameBoards(game);
      dragShip = null;
    }
  }
}
function handleShipPlacement(event) {
  var cell = event.target;
  var row = cell.getAttribute('data-row');
  var col = cell.getAttribute('data-col');
  var coordinates = getShipCoordinates(parseInt(row), parseInt(col), dragShip.length, 'vertical');
  var success = game.gameboard1.placeShip(dragShip, coordinates);
  if (success) {
    renderGameBoards(game);
    dragShip = null;
  }
}
function getShipCoordinates(startRow, startCol, length, orientation) {
  var coordinates = [];
  if (orientation === 'horizontal') {
    for (var i = 0; i < length; i++) {
      coordinates.push([startRow, startCol + i]);
    }
  } else {
    for (var _i = 0; _i < length; _i++) {
      coordinates.push([startRow + _i, startCol]);
    }
  }
  return coordinates;
}


/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/Player.js");
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");



function Game() {
  var gameboard1 = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard)();
  var gameboard2 = (0,_Gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard)();
  var player1 = (0,_Player__WEBPACK_IMPORTED_MODULE_0__.createHumanPlayer)(gameboard2);
  var player2 = (0,_Player__WEBPACK_IMPORTED_MODULE_0__.createAIPlayer)(gameboard1);
  var gameboard1Carrier = (0,_Ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(5);
  var gameboard1Battleship = (0,_Ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(4);
  var gameboard1Sbmarine = (0,_Ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(3);
  var gameboard1Destroyer = (0,_Ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(3);
  var gameboard1Patrol = (0,_Ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(2);
  var gameboard2Carrier = (0,_Ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(5);
  var gameboard2Battleship = (0,_Ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(4);
  var gameboard2Sbmarine = (0,_Ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(3);
  var gameboard2Destroyer = (0,_Ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(3);
  var gameboard2Patrol = (0,_Ship__WEBPACK_IMPORTED_MODULE_2__.Ship)(2);
  function startGame() {
    gameboard1.placeShip(gameboard1Carrier, [{
      row: 0,
      col: 0
    }, {
      row: 0,
      col: 1
    }, {
      row: 0,
      col: 2
    }, {
      row: 0,
      col: 3
    }, {
      row: 0,
      col: 4
    }]);
    gameboard1.placeShip(gameboard1Battleship, [{
      row: 5,
      col: 5
    }, {
      row: 6,
      col: 5
    }, {
      row: 7,
      col: 5
    }, {
      row: 8,
      col: 5
    }]);
    gameboard1.placeShip(gameboard1Sbmarine, [{
      row: 2,
      col: 0
    }, {
      row: 2,
      col: 1
    }, {
      row: 2,
      col: 2
    }]);
    gameboard1.placeShip(gameboard1Destroyer, [{
      row: 5,
      col: 9
    }, {
      row: 6,
      col: 9
    }, {
      row: 7,
      col: 9
    }]);
    gameboard1.placeShip(gameboard1Patrol, [{
      row: 4,
      col: 0
    }, {
      row: 4,
      col: 1
    }]);
    gameboard2.placeShip(gameboard2Carrier, [{
      row: 0,
      col: 0
    }, {
      row: 0,
      col: 1
    }, {
      row: 0,
      col: 2
    }, {
      row: 0,
      col: 3
    }, {
      row: 0,
      col: 4
    }]);
    gameboard2.placeShip(gameboard2Battleship, [{
      row: 5,
      col: 5
    }, {
      row: 6,
      col: 5
    }, {
      row: 7,
      col: 5
    }, {
      row: 8,
      col: 5
    }]);
    gameboard2.placeShip(gameboard2Sbmarine, [{
      row: 5,
      col: 9
    }, {
      row: 6,
      col: 9
    }, {
      row: 7,
      col: 9
    }]);
    gameboard2.placeShip(gameboard2Destroyer, [{
      row: 2,
      col: 0
    }, {
      row: 2,
      col: 1
    }, {
      row: 2,
      col: 2
    }]);
    gameboard2.placeShip(gameboard2Patrol, [{
      row: 4,
      col: 0
    }, {
      row: 4,
      col: 1
    }]);
  }
  return {
    startGame: startGame,
    player1: player1,
    player2: player2,
    gameboard1: gameboard1,
    gameboard2: gameboard2
  };
}


/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var Gameboard = function Gameboard() {
  var boardSize = 10;
  var board = Array(boardSize).fill(null).map(function () {
    return Array(boardSize).fill(null);
  });
  var ships = [];
  var missedAttacks = [];
  var placeShip = function placeShip(ship, coordinates) {
    if (!isValidCoordinates(coordinates)) return false;
    var _iterator = _createForOfIteratorHelper(coordinates),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _step.value,
          row = _step$value.row,
          col = _step$value.col;
        board[row][col] = ship;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    ships.push(ship);
    return true;
  };
  var isValidCoordinates = function isValidCoordinates(coordinates) {
    var _iterator2 = _createForOfIteratorHelper(coordinates),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _step2$value = _step2.value,
          row = _step2$value.row,
          col = _step2$value.col;
        if (row < 0 || row >= boardSize || col < 0 || col >= boardSize || board[row][col] !== null) {
          return false;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return true;
  };
  var receiveAttack = function receiveAttack(attack) {
    var _attack = _slicedToArray(attack, 2),
      row = _attack[0],
      col = _attack[1];
    if (board[row][col] === null) {
      missedAttacks.push(attack);
      return false;
    }
    var ship = board[row][col];
    ship.Hit();
    if (ship.isSunk()) {
      ship.sunk = true;
    }
    board[row][col] = null;
    return true;
  };
  var allShipsSunk = function allShipsSunk() {
    return ships.every(function (ship) {
      return ship.sunk;
    });
  };
  return {
    board: board,
    placeShip: placeShip,
    receiveAttack: receiveAttack,
    allShipsSunk: allShipsSunk,
    missedAttacks: missedAttacks
  };
};


/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAIPlayer: () => (/* binding */ createAIPlayer),
/* harmony export */   createHumanPlayer: () => (/* binding */ createHumanPlayer)
/* harmony export */ });
function createAIPlayer(opponentGameboard) {
  var attackedCoordinates = new Set();
  function randomAttack() {
    var availableCoordinates = [];
    for (var row = 0; row < 10; row++) {
      for (var col = 0; col < 10; col++) {
        var coordinates = [row, col];
        if (!attackedCoordinates.has(JSON.stringify(coordinates))) {
          availableCoordinates.push(coordinates);
        }
      }
    }
    if (availableCoordinates.length === 0) {
      return null;
    }
    var randomIndex = Math.floor(Math.random() * availableCoordinates.length);
    return availableCoordinates[randomIndex];
  }
  ;
  function takeTurn() {
    var attack;
    var result;
    do {
      attack = randomAttack();
      if (attack === null) {
        result = "All coordinates attacked";
      } else {
        result = opponentGameboard.receiveAttack(attack);
      }
    } while (result === "Already attacked");
    if (attack !== null) {
      attackedCoordinates.add(JSON.stringify(attack));
    }
    return {
      attack: attack,
      result: result
    };
  }
  ;
  return {
    takeTurn: takeTurn
  };
}
;
function createHumanPlayer(opponentGameboard) {
  function takeTurn(attackCoordinates) {
    var result = opponentGameboard.receiveAttack(attackCoordinates);
    return {
      attack: attackCoordinates,
      result: result
    };
  }
  return {
    takeTurn: takeTurn
  };
}


/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
function Ship(length) {
  if (length <= 0) return 'Invalid Ship';
  return {
    length: length,
    hit: 0,
    sunk: false,
    Hit: function Hit() {
      this.hit += 1;
      return this.hit;
    },
    isSunk: function isSunk() {
      return this.hit >= this.length;
    }
  };
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
  
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;
  
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
}
  
body {
    margin: 0;
    display: flex;
    flex-direction: column;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
    background-color: rgba(0, 191, 255, 0.118);
}

.boards {
    display: grid;
    grid-template-columns: repeat(2, 450px);
    grid-template-rows: 80px 450px;
    column-gap: 10rem;
    margin-top: 4rem;
    margin-bottom: 2rem;
}
  
.cell {
    width: 40px;
    height: 40px;

    border: solid 1px rgba(240, 248, 255, 0.721);
}

.ship {
    background-color: aliceblue;
    border: solid 1px rgba(240, 248, 255, 0.721);
}

.hit {
    background-color: rgba(255, 0, 0, 0.645);
    border-radius: 50%;
}

.miss {
    background-color: rgba(2, 127, 177, 0.822);
    border-radius: 50%;
}

.disabled {
    pointer-events: none;  
}

.game-container {
    display: grid;
    grid-template-columns: 2fr;
    column-gap: 7rem;
    row-gap: 1px;
    min-width: 320px;
    margin-bottom: 3rem;
}

#gameboard1-container, #gameboard2-container {
    display: grid;
    column-gap: 1px;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    background-color: rgba(2, 127, 177, 0.822);
}

#message-container {
    margin-top: 5rem;
    padding: 1rem;
}

h1, h2 {
    text-align: center;
}
  `, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mEAAmE;IACnE,gBAAgB;IAChB,gBAAgB;;IAEhB,wBAAwB;IACxB,gCAAgC;IAChC,yBAAyB;;IAEzB,oBAAoB;IACpB,kCAAkC;IAClC,mCAAmC;IACnC,kCAAkC;IAClC,8BAA8B;AAClC;;AAEA;IACI,SAAS;IACT,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;IACjB,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,8BAA8B;IAC9B,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;;IAEZ,4CAA4C;AAChD;;AAEA;IACI,2BAA2B;IAC3B,4CAA4C;AAChD;;AAEA;IACI,wCAAwC;IACxC,kBAAkB;AACtB;;AAEA;IACI,0CAA0C;IAC1C,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,gBAAgB;IAChB,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,sCAAsC;IACtC,mCAAmC;IACnC,0CAA0C;AAC9C;;AAEA;IACI,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":[":root {\n    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;\n    line-height: 1.5;\n    font-weight: 400;\n  \n    color-scheme: light dark;\n    color: rgba(255, 255, 255, 0.87);\n    background-color: #242424;\n  \n    font-synthesis: none;\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-text-size-adjust: 100%;\n}\n  \nbody {\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    place-items: center;\n    min-width: 320px;\n    min-height: 100vh;\n    background-color: rgba(0, 191, 255, 0.118);\n}\n\n.boards {\n    display: grid;\n    grid-template-columns: repeat(2, 450px);\n    grid-template-rows: 80px 450px;\n    column-gap: 10rem;\n    margin-top: 4rem;\n    margin-bottom: 2rem;\n}\n  \n.cell {\n    width: 40px;\n    height: 40px;\n\n    border: solid 1px rgba(240, 248, 255, 0.721);\n}\n\n.ship {\n    background-color: aliceblue;\n    border: solid 1px rgba(240, 248, 255, 0.721);\n}\n\n.hit {\n    background-color: rgba(255, 0, 0, 0.645);\n    border-radius: 50%;\n}\n\n.miss {\n    background-color: rgba(2, 127, 177, 0.822);\n    border-radius: 50%;\n}\n\n.disabled {\n    pointer-events: none;  \n}\n\n.game-container {\n    display: grid;\n    grid-template-columns: 2fr;\n    column-gap: 7rem;\n    row-gap: 1px;\n    min-width: 320px;\n    margin-bottom: 3rem;\n}\n\n#gameboard1-container, #gameboard2-container {\n    display: grid;\n    column-gap: 1px;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    background-color: rgba(2, 127, 177, 0.822);\n}\n\n#message-container {\n    margin-top: 5rem;\n    padding: 1rem;\n}\n\nh1, h2 {\n    text-align: center;\n}\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ "./src/Game.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/*import './style.css'
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
} */




var game = (0,_Game__WEBPACK_IMPORTED_MODULE_1__.Game)();
game.startGame();
(0,_DOM__WEBPACK_IMPORTED_MODULE_2__.renderGameBoards)(game);
function handleAttack(event) {
  var status = document.getElementById('message-container');
  status.textContent = "You shot and...it's";
  var clickedCell = event.target;
  var coordinates = getCellCoordinates(clickedCell);
  var player1Attack = game.player1.takeTurn(coordinates);
  var result = player1Attack.result;
  updateGameBoardUI('gameboard2-container', coordinates, result);
  setTimeout(function () {
    if (result) {
      status.textContent += " hit!";
    } else {
      status.textContent += " miss!";
    }
  }, 2000);
  if (game.gameboard2.allShipsSunk()) {
    endGame('Player 1');
  } else {
    setTimeout(aiTurn, 3000);
  }
}
function aiTurn() {
  var status = document.getElementById('message-container');
  status.textContent = 'Your enemy is aiming...';
  var player2Attack = game.player2.takeTurn();
  var result = player2Attack.result;
  var coordinates = player2Attack.attack;
  updateGameBoardUI('gameboard1-container', coordinates, result);
  setTimeout(function () {
    if (result) {
      status.textContent = "Enemy fire a shot and it's a hit!";
    } else {
      status.textContent = "Enemy fire a shot and it's a miss!";
    }
  }, 2000);
  if (game.gameboard1.allShipsSunk()) {
    endGame('Player 2');
  }
}
function getCellCoordinates(cell) {
  var row = parseInt(cell.getAttribute('data-row'));
  var col = parseInt(cell.getAttribute('data-col'));
  return [row, col];
}
function updateGameBoardUI(gameboardContainer, coordinates, result) {
  var cell = document.getElementById(gameboardContainer).querySelector("[data-row=\"".concat(coordinates[0], "\"][data-col=\"").concat(coordinates[1], "\"]"));
  console.log('called');
  if (!result) {
    cell.classList.add('miss');
  } else {
    cell.classList.add('hit');
  }
  cell.classList.add('disabled');
  cell.removeEventListener('click', handleAttack);
}
function endGame(winner) {
  //statusMessage(winner);
  alert(winner);
}
document.getElementById('gameboard2-container').addEventListener('click', handleAttack);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsRUFBRUcsR0FBRyxDQUFDO0FBQ25CO0FBRUEsU0FBU2dHLGlCQUFpQkEsQ0FBQ0ssa0JBQWtCLEVBQUV0RixXQUFXLEVBQUV1RSxNQUFNLEVBQUU7RUFDbEUsSUFBTXJGLElBQUksR0FBR25CLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDc0gsa0JBQWtCLENBQUMsQ0FBQ0MsYUFBYSxnQkFBQUMsTUFBQSxDQUFleEYsV0FBVyxDQUFDLENBQUMsQ0FBQyxxQkFBQXdGLE1BQUEsQ0FBZ0J4RixXQUFXLENBQUMsQ0FBQyxDQUFDLFFBQUksQ0FBQztFQUN0SXlGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztFQUNyQixJQUFJLENBQUNuQixNQUFNLEVBQUU7SUFDWHJGLElBQUksQ0FBQ00sU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0VBQzVCLENBQUMsTUFBTTtJQUNMUCxJQUFJLENBQUNNLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLEtBQUssQ0FBQztFQUMzQjtFQUVBUCxJQUFJLENBQUNNLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsQ0FBQztFQUM5QlAsSUFBSSxDQUFDeUcsbUJBQW1CLENBQUMsT0FBTyxFQUFFaEIsWUFBWSxDQUFDO0FBQ2pEO0FBRUEsU0FBU1EsT0FBT0EsQ0FBQ1MsTUFBTSxFQUFFO0VBQ3ZCO0VBQ0FDLEtBQUssQ0FBQ0QsTUFBTSxDQUFDO0FBQ2Y7QUFFQTdILFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLHNCQUFzQixDQUFDLENBQUNNLGdCQUFnQixDQUFDLE9BQU8sRUFBRXFHLFlBQVksQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9HYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvR2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvU2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypmdW5jdGlvbiByZW5kZXJHYW1lQm9hcmRzKGdhbWUpIHtcbiAgY29uc3QgcGxheWVyMUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVib2FyZDEtY29udGFpbmVyJyk7XG4gIGNvbnN0IHBsYXllcjJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmQyLWNvbnRhaW5lcicpO1xuXG4gIHBsYXllcjFCb2FyZC5pbm5lckhUTUwgPSAnJztcbiAgcGxheWVyMkJvYXJkLmlubmVySFRNTCA9ICcnO1xuXG4gIHJlbmRlckJvYXJkKGdhbWUuZ2FtZWJvYXJkMSwgcGxheWVyMUJvYXJkKTtcbiAgcmVuZGVyQm9hcmQoZ2FtZS5nYW1lYm9hcmQyLCBwbGF5ZXIyQm9hcmQsIHRydWUpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJCb2FyZChnYW1lYm9hcmQsIGNvbnRhaW5lciwgaGlkZVNoaXBzKSB7XG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGdhbWVib2FyZC5ib2FyZC5sZW5ndGg7IHJvdysrKSB7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgZ2FtZWJvYXJkLmJvYXJkW3Jvd10ubGVuZ3RoOyBjb2wrKykge1xuICAgICAgY29uc3QgY2VsbCA9IGNyZWF0ZUNlbGwocm93LCBjb2wsIGdhbWVib2FyZC5ib2FyZFtyb3ddW2NvbF0sIGhpZGVTaGlwcyk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNlbGwocm93LCBjb2wsIGNvbnRlbnQsIGhpZGVTaGlwcykge1xuICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXJvdycsIHJvdyk7XG4gIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLWNvbCcsIGNvbCk7XG5cbiAgaWYgKGNvbnRlbnQgPT09IG51bGwpIHtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWhpZGVTaGlwcykge1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgfWVsc2Uge1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNlbGw7XG59XG5cbmZ1bmN0aW9uIHN0YXR1c01lc3NhZ2UobWVzc2FnZSkge1xuICBjb25zdCBtZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2UtY29udGFpbmVyJyk7XG4gIG1lc3NhZ2VDb250YWluZXIudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xufVxuXG5leHBvcnQgeyByZW5kZXJHYW1lQm9hcmRzLCBzdGF0dXNNZXNzYWdlIH07ICovXG5cbmZ1bmN0aW9uIHJlbmRlckdhbWVCb2FyZHMoZ2FtZSkge1xuICBjb25zdCBwbGF5ZXIxQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkMS1jb250YWluZXInKTtcbiAgY29uc3QgcGxheWVyMkJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVib2FyZDItY29udGFpbmVyJyk7XG5cbiAgcGxheWVyMUJvYXJkLmlubmVySFRNTCA9ICcnO1xuICBwbGF5ZXIyQm9hcmQuaW5uZXJIVE1MID0gJyc7XG5cbiAgcmVuZGVyQm9hcmQoZ2FtZS5nYW1lYm9hcmQxLCBwbGF5ZXIxQm9hcmQsIGZhbHNlKTsgLy8gU2V0IGhpZGVTaGlwcyB0byBmYWxzZSBmb3IgcGxheWVyIDFcbiAgcmVuZGVyQm9hcmQoZ2FtZS5nYW1lYm9hcmQyLCBwbGF5ZXIyQm9hcmQsIHRydWUpOyAvLyBTZXQgaGlkZVNoaXBzIHRvIHRydWUgZm9yIHBsYXllciAyXG5cbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVycyBmb3Igc2hpcCBwbGFjZW1lbnQgYnkgaHVtYW4gcGxheWVyXG4gIHBsYXllcjFCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBoYW5kbGVEcmFnU3RhcnQpO1xuICBwbGF5ZXIxQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBoYW5kbGVEcmFnT3Zlcik7XG4gIHBsYXllcjFCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgaGFuZGxlRHJvcCk7XG4gIHBsYXllcjFCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVNoaXBQbGFjZW1lbnQpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJCb2FyZChnYW1lYm9hcmQsIGNvbnRhaW5lciwgaGlkZVNoaXBzKSB7XG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGdhbWVib2FyZC5ib2FyZC5sZW5ndGg7IHJvdysrKSB7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgZ2FtZWJvYXJkLmJvYXJkW3Jvd10ubGVuZ3RoOyBjb2wrKykge1xuICAgICAgY29uc3QgY2VsbCA9IGNyZWF0ZUNlbGwocm93LCBjb2wsIGdhbWVib2FyZC5ib2FyZFtyb3ddW2NvbF0sIGhpZGVTaGlwcyk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNlbGwocm93LCBjb2wsIGNvbnRlbnQsIGhpZGVTaGlwcykge1xuICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXJvdycsIHJvdyk7XG4gIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLWNvbCcsIGNvbCk7XG5cbiAgaWYgKGNvbnRlbnQgPT09IG51bGwpIHtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAvLyBBZGQgZHJhZyBldmVudCBsaXN0ZW5lciBmb3IgZW1wdHkgY2VsbHNcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgaGFuZGxlRHJhZ092ZXIpO1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGhhbmRsZURyb3ApO1xuICB9IGVsc2Uge1xuICAgIGlmICghaGlkZVNoaXBzKSB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgIC8vIEFkZCBkcmFnIGV2ZW50IGxpc3RlbmVyIGZvciBzaGlwc1xuICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIHRydWUpO1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBoYW5kbGVEcmFnU3RhcnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2VsbDtcbn1cblxuLy8gRHJhZyBhbmQgZHJvcCBldmVudCBoYW5kbGVyc1xubGV0IGRyYWdTaGlwID0gbnVsbDtcblxuZnVuY3Rpb24gaGFuZGxlRHJhZ1N0YXJ0KGV2ZW50KSB7XG4gIGNvbnN0IGNlbGwgPSBldmVudC50YXJnZXQ7XG4gIGNvbnN0IHJvdyA9IGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXJvdycpO1xuICBjb25zdCBjb2wgPSBjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2wnKTtcbiAgY29uc3Qgc2hpcCA9IGdhbWUuZ2FtZWJvYXJkMS5ib2FyZFtyb3ddW2NvbF07XG5cbiAgaWYgKHNoaXAgIT09IG51bGwpIHtcbiAgICBkcmFnU2hpcCA9IHNoaXA7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlRHJhZ092ZXIoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRHJvcChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IGNlbGwgPSBldmVudC50YXJnZXQ7XG4gIGNvbnN0IHJvdyA9IGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXJvdycpO1xuICBjb25zdCBjb2wgPSBjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2wnKTtcblxuICBpZiAoZHJhZ1NoaXAgIT09IG51bGwpIHtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IGdldFNoaXBDb29yZGluYXRlcyhwYXJzZUludChyb3cpLCBwYXJzZUludChjb2wpLCBkcmFnU2hpcC5sZW5ndGgsICdob3Jpem9udGFsJyk7XG4gICAgY29uc3Qgc3VjY2VzcyA9IGdhbWUuZ2FtZWJvYXJkMS5wbGFjZVNoaXAoZHJhZ1NoaXAsIGNvb3JkaW5hdGVzKTtcblxuICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICByZW5kZXJHYW1lQm9hcmRzKGdhbWUpO1xuICAgICAgZHJhZ1NoaXAgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVTaGlwUGxhY2VtZW50KGV2ZW50KSB7XG4gIGNvbnN0IGNlbGwgPSBldmVudC50YXJnZXQ7XG4gIGNvbnN0IHJvdyA9IGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXJvdycpO1xuICBjb25zdCBjb2wgPSBjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2wnKTtcblxuICBjb25zdCBjb29yZGluYXRlcyA9IGdldFNoaXBDb29yZGluYXRlcyhwYXJzZUludChyb3cpLCBwYXJzZUludChjb2wpLCBkcmFnU2hpcC5sZW5ndGgsICd2ZXJ0aWNhbCcpO1xuICBjb25zdCBzdWNjZXNzID0gZ2FtZS5nYW1lYm9hcmQxLnBsYWNlU2hpcChkcmFnU2hpcCwgY29vcmRpbmF0ZXMpO1xuXG4gIGlmIChzdWNjZXNzKSB7XG4gICAgcmVuZGVyR2FtZUJvYXJkcyhnYW1lKTtcbiAgICBkcmFnU2hpcCA9IG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U2hpcENvb3JkaW5hdGVzKHN0YXJ0Um93LCBzdGFydENvbCwgbGVuZ3RoLCBvcmllbnRhdGlvbikge1xuICBjb25zdCBjb29yZGluYXRlcyA9IFtdO1xuXG4gIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29vcmRpbmF0ZXMucHVzaChbc3RhcnRSb3csIHN0YXJ0Q29sICsgaV0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb29yZGluYXRlcy5wdXNoKFtzdGFydFJvdyArIGksIHN0YXJ0Q29sXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvb3JkaW5hdGVzO1xufVxuXG5leHBvcnQgeyByZW5kZXJHYW1lQm9hcmRzIH07IiwiaW1wb3J0IHsgY3JlYXRlQUlQbGF5ZXIsIGNyZWF0ZUh1bWFuUGxheWVyIH0gZnJvbSAnLi9QbGF5ZXInO1xuaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSAnLi9HYW1lYm9hcmQnO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vU2hpcCc7XG5cbmZ1bmN0aW9uIEdhbWUoKSB7XG4gIGNvbnN0IGdhbWVib2FyZDEgPSBHYW1lYm9hcmQoKTtcbiAgY29uc3QgZ2FtZWJvYXJkMiA9IEdhbWVib2FyZCgpO1xuICBjb25zdCBwbGF5ZXIxID0gY3JlYXRlSHVtYW5QbGF5ZXIoZ2FtZWJvYXJkMik7XG4gIGNvbnN0IHBsYXllcjIgPSBjcmVhdGVBSVBsYXllcihnYW1lYm9hcmQxKTtcblxuICBjb25zdCBnYW1lYm9hcmQxQ2FycmllciA9IFNoaXAoNSk7XG4gIGNvbnN0IGdhbWVib2FyZDFCYXR0bGVzaGlwID0gU2hpcCg0KTtcbiAgY29uc3QgZ2FtZWJvYXJkMVNibWFyaW5lID0gU2hpcCgzKTtcbiAgY29uc3QgZ2FtZWJvYXJkMURlc3Ryb3llciA9IFNoaXAoMyk7XG4gIGNvbnN0IGdhbWVib2FyZDFQYXRyb2w9IFNoaXAoMik7XG4gIFxuXG4gIGNvbnN0IGdhbWVib2FyZDJDYXJyaWVyID0gU2hpcCg1KTtcbiAgY29uc3QgZ2FtZWJvYXJkMkJhdHRsZXNoaXAgPSBTaGlwKDQpO1xuICBjb25zdCBnYW1lYm9hcmQyU2JtYXJpbmUgPSBTaGlwKDMpO1xuICBjb25zdCBnYW1lYm9hcmQyRGVzdHJveWVyID0gU2hpcCgzKTtcbiAgY29uc3QgZ2FtZWJvYXJkMlBhdHJvbD0gU2hpcCgyKTtcbiAgXG4gIGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcblxuICAgIGdhbWVib2FyZDEucGxhY2VTaGlwKGdhbWVib2FyZDFDYXJyaWVyLCBbXG4gICAgICB7IHJvdzogMCwgY29sOiAwIH0sXG4gICAgICB7IHJvdzogMCwgY29sOiAxIH0sXG4gICAgICB7IHJvdzogMCwgY29sOiAyIH0sXG4gICAgICB7IHJvdzogMCwgY29sOiAzIH0sXG4gICAgICB7IHJvdzogMCwgY29sOiA0IH0sXG4gICAgXSk7XG4gICAgZ2FtZWJvYXJkMS5wbGFjZVNoaXAoZ2FtZWJvYXJkMUJhdHRsZXNoaXAsIFtcbiAgICAgIHsgcm93OiA1LCBjb2w6IDUgfSxcbiAgICAgIHsgcm93OiA2LCBjb2w6IDUgfSxcbiAgICAgIHsgcm93OiA3LCBjb2w6IDUgfSxcbiAgICAgIHsgcm93OiA4LCBjb2w6IDUgfSxcbiAgICBdKTtcbiAgICBnYW1lYm9hcmQxLnBsYWNlU2hpcChnYW1lYm9hcmQxU2JtYXJpbmUsIFtcbiAgICAgIHsgcm93OiAyLCBjb2w6IDAgfSxcbiAgICAgIHsgcm93OiAyLCBjb2w6IDEgfSxcbiAgICAgIHsgcm93OiAyLCBjb2w6IDIgfSxcbiAgICBdKTtcbiAgICBnYW1lYm9hcmQxLnBsYWNlU2hpcChnYW1lYm9hcmQxRGVzdHJveWVyLCBbXG4gICAgICB7IHJvdzogNSwgY29sOiA5IH0sXG4gICAgICB7IHJvdzogNiwgY29sOiA5IH0sXG4gICAgICB7IHJvdzogNywgY29sOiA5IH0sXG4gICAgXSk7XG4gICAgZ2FtZWJvYXJkMS5wbGFjZVNoaXAoZ2FtZWJvYXJkMVBhdHJvbCwgW1xuICAgICAgeyByb3c6IDQsIGNvbDogMCB9LFxuICAgICAgeyByb3c6IDQsIGNvbDogMSB9LFxuICAgIF0pO1xuICBcbiAgICBnYW1lYm9hcmQyLnBsYWNlU2hpcChnYW1lYm9hcmQyQ2FycmllciwgW1xuICAgICAgeyByb3c6IDAsIGNvbDogMCB9LFxuICAgICAgeyByb3c6IDAsIGNvbDogMSB9LFxuICAgICAgeyByb3c6IDAsIGNvbDogMiB9LFxuICAgICAgeyByb3c6IDAsIGNvbDogMyB9LFxuICAgICAgeyByb3c6IDAsIGNvbDogNCB9LFxuICAgIF0pO1xuICAgIGdhbWVib2FyZDIucGxhY2VTaGlwKGdhbWVib2FyZDJCYXR0bGVzaGlwLCBbXG4gICAgICB7IHJvdzogNSwgY29sOiA1IH0sXG4gICAgICB7IHJvdzogNiwgY29sOiA1IH0sXG4gICAgICB7IHJvdzogNywgY29sOiA1IH0sXG4gICAgICB7IHJvdzogOCwgY29sOiA1IH0sXG4gICAgXSk7XG4gICAgZ2FtZWJvYXJkMi5wbGFjZVNoaXAoZ2FtZWJvYXJkMlNibWFyaW5lLCBbXG4gICAgICB7IHJvdzogNSwgY29sOiA5IH0sXG4gICAgICB7IHJvdzogNiwgY29sOiA5IH0sXG4gICAgICB7IHJvdzogNywgY29sOiA5IH0sXG4gICAgXSk7XG4gICAgZ2FtZWJvYXJkMi5wbGFjZVNoaXAoZ2FtZWJvYXJkMkRlc3Ryb3llciwgW1xuICAgICAgeyByb3c6IDIsIGNvbDogMCB9LFxuICAgICAgeyByb3c6IDIsIGNvbDogMSB9LFxuICAgICAgeyByb3c6IDIsIGNvbDogMiB9LFxuICAgIF0pO1xuICAgIGdhbWVib2FyZDIucGxhY2VTaGlwKGdhbWVib2FyZDJQYXRyb2wsIFtcbiAgICAgIHsgcm93OiA0LCBjb2w6IDAgfSxcbiAgICAgIHsgcm93OiA0LCBjb2w6IDEgfSxcbiAgICBdKTtcblxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzdGFydEdhbWUsXG4gICAgcGxheWVyMSxcbiAgICBwbGF5ZXIyLFxuICAgIGdhbWVib2FyZDEsXG4gICAgZ2FtZWJvYXJkMixcbiAgfTtcbn1cblxuZXhwb3J0IHsgR2FtZSB9O1xuXG4iLCJjb25zdCBHYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9hcmRTaXplID0gMTA7XG4gICAgY29uc3QgYm9hcmQgPSBBcnJheShib2FyZFNpemUpLmZpbGwobnVsbCkubWFwKCgpID0+IEFycmF5KGJvYXJkU2l6ZSkuZmlsbChudWxsKSk7XG4gICAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgICBjb25zdCBtaXNzZWRBdHRhY2tzID0gW107XG4gIFxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChzaGlwLCBjb29yZGluYXRlcykgPT4ge1xuICAgICAgaWYgKCFpc1ZhbGlkQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpKSByZXR1cm4gZmFsc2U7XG4gIFxuICAgICAgZm9yIChjb25zdCB7IHJvdywgY29sIH0gb2YgY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgYm9hcmRbcm93XVtjb2xdID0gc2hpcDtcbiAgICAgIH1cbiAgXG4gICAgICBzaGlwcy5wdXNoKHNoaXApO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgXG4gICAgY29uc3QgaXNWYWxpZENvb3JkaW5hdGVzID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IHsgcm93LCBjb2wgfSBvZiBjb29yZGluYXRlcykge1xuICAgICAgICBpZiAocm93IDwgMCB8fCByb3cgPj0gYm9hcmRTaXplIHx8IGNvbCA8IDAgfHwgY29sID49IGJvYXJkU2l6ZSB8fCBib2FyZFtyb3ddW2NvbF0gIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIFxuICAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoYXR0YWNrKSA9PiB7XG4gICAgICBjb25zdCBbcm93LCBjb2xdID0gYXR0YWNrO1xuICBcbiAgICAgIGlmIChib2FyZFtyb3ddW2NvbF0gPT09IG51bGwpIHtcbiAgICAgICAgbWlzc2VkQXR0YWNrcy5wdXNoKGF0dGFjayk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgXG4gICAgICBjb25zdCBzaGlwID0gYm9hcmRbcm93XVtjb2xdO1xuICAgICAgc2hpcC5IaXQoKTtcbiAgXG4gICAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICBzaGlwLnN1bmsgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBib2FyZFtyb3ddW2NvbF0gPSBudWxsO1xuICBcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIFxuICAgIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICAgIHJldHVybiBzaGlwcy5ldmVyeShzaGlwID0+IHNoaXAuc3Vuayk7XG4gICAgfTtcbiAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm9hcmQsXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgYWxsU2hpcHNTdW5rLFxuICAgICAgICBtaXNzZWRBdHRhY2tzLFxuICAgIH07XG4gIH07XG4gIFxuICBleHBvcnQgeyBHYW1lYm9hcmQgfTsiLCJmdW5jdGlvbiBjcmVhdGVBSVBsYXllcihvcHBvbmVudEdhbWVib2FyZCkge1xuICAgIGNvbnN0IGF0dGFja2VkQ29vcmRpbmF0ZXMgPSBuZXcgU2V0KCk7XG5cbiAgICBmdW5jdGlvbiByYW5kb21BdHRhY2soKSB7XG4gICAgICAgIGxldCBhdmFpbGFibGVDb29yZGluYXRlcyA9IFtdO1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgMTA7IHJvdysrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCAxMDsgY29sKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IFtyb3csIGNvbF07XG4gICAgICAgICAgICAgICAgaWYgKCFhdHRhY2tlZENvb3JkaW5hdGVzLmhhcyhKU09OLnN0cmluZ2lmeShjb29yZGluYXRlcykpKSB7XG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZUNvb3JkaW5hdGVzLnB1c2goY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdmFpbGFibGVDb29yZGluYXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVDb29yZGluYXRlcy5sZW5ndGgpO1xuXG4gICAgICAgIHJldHVybiBhdmFpbGFibGVDb29yZGluYXRlc1tyYW5kb21JbmRleF07XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHRha2VUdXJuKCkge1xuXG4gICAgICAgIGxldCBhdHRhY2s7XG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGF0dGFjayA9IHJhbmRvbUF0dGFjaygpO1xuICAgICAgICAgICAgaWYgKGF0dGFjayA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFwiQWxsIGNvb3JkaW5hdGVzIGF0dGFja2VkXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG9wcG9uZW50R2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soYXR0YWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAocmVzdWx0ID09PSBcIkFscmVhZHkgYXR0YWNrZWRcIik7XG5cbiAgICAgICAgaWYgKGF0dGFjayAhPT0gbnVsbCkge1xuICAgICAgICAgICAgYXR0YWNrZWRDb29yZGluYXRlcy5hZGQoSlNPTi5zdHJpbmdpZnkoYXR0YWNrKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7IGF0dGFjaywgIHJlc3VsdCB9O1xuICAgIH07XG4gXG4gICAgcmV0dXJuIHsgdGFrZVR1cm4gfTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUh1bWFuUGxheWVyKG9wcG9uZW50R2FtZWJvYXJkKSB7XG4gICAgZnVuY3Rpb24gdGFrZVR1cm4oYXR0YWNrQ29vcmRpbmF0ZXMpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IG9wcG9uZW50R2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soYXR0YWNrQ29vcmRpbmF0ZXMpO1xuICAgICAgcmV0dXJuIHsgYXR0YWNrOiBhdHRhY2tDb29yZGluYXRlcywgcmVzdWx0IH07XG4gICAgfVxuICBcbiAgICByZXR1cm4geyB0YWtlVHVybiB9O1xuICB9XG4gIFxuXG5leHBvcnQgeyBjcmVhdGVBSVBsYXllciwgY3JlYXRlSHVtYW5QbGF5ZXIgfTsiLCJmdW5jdGlvbiBTaGlwKGxlbmd0aCkge1xuICAgIGlmIChsZW5ndGggPD0gMCkgcmV0dXJuICdJbnZhbGlkIFNoaXAnO1xuICAgIHJldHVybiB7XG4gICAgICBsZW5ndGgsXG4gICAgICBoaXQ6IDAsXG4gICAgICBzdW5rOiBmYWxzZSxcbiAgXG4gICAgICBIaXQoKSB7XG4gICAgICAgIHRoaXMuaGl0ICs9IDE7XG4gICAgICAgIHJldHVybiB0aGlzLmhpdDtcbiAgICAgIH0sXG4gIFxuICAgICAgaXNTdW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oaXQgPj0gdGhpcy5sZW5ndGg7XG4gICAgICB9LFxuICAgIH07XG4gIH1cbiAgXG4gIGV4cG9ydCB7IFNoaXAgfTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIGZvbnQtZmFtaWx5OiBJbnRlciwgc3lzdGVtLXVpLCBBdmVuaXIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICBcbiAgICBjb2xvci1zY2hlbWU6IGxpZ2h0IGRhcms7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44Nyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjQyNDtcbiAgXG4gICAgZm9udC1zeW50aGVzaXM6IG5vbmU7XG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbn1cbiAgXG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE5MSwgMjU1LCAwLjExOCk7XG59XG5cbi5ib2FyZHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgNDUwcHgpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogODBweCA0NTBweDtcbiAgICBjb2x1bW4tZ2FwOiAxMHJlbTtcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG4gIFxuLmNlbGwge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcblxuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMjQwLCAyNDgsIDI1NSwgMC43MjEpO1xufVxuXG4uc2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMjQwLCAyNDgsIDI1NSwgMC43MjEpO1xufVxuXG4uaGl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42NDUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm1pc3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTI3LCAxNzcsIDAuODIyKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5kaXNhYmxlZCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7ICBcbn1cblxuLmdhbWUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyO1xuICAgIGNvbHVtbi1nYXA6IDdyZW07XG4gICAgcm93LWdhcDogMXB4O1xuICAgIG1pbi13aWR0aDogMzIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbn1cblxuI2dhbWVib2FyZDEtY29udGFpbmVyLCAjZ2FtZWJvYXJkMi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgY29sdW1uLWdhcDogMXB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTI3LCAxNzcsIDAuODIyKTtcbn1cblxuI21lc3NhZ2UtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbmgxLCBoMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuICBgLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtRUFBbUU7SUFDbkUsZ0JBQWdCO0lBQ2hCLGdCQUFnQjs7SUFFaEIsd0JBQXdCO0lBQ3hCLGdDQUFnQztJQUNoQyx5QkFBeUI7O0lBRXpCLG9CQUFvQjtJQUNwQixrQ0FBa0M7SUFDbEMsbUNBQW1DO0lBQ25DLGtDQUFrQztJQUNsQyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZOztJQUVaLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixzQ0FBc0M7SUFDdEMsbUNBQW1DO0lBQ25DLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgZm9udC1mYW1pbHk6IEludGVyLCBzeXN0ZW0tdWksIEF2ZW5pciwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIFxcbiAgICBjb2xvci1zY2hlbWU6IGxpZ2h0IGRhcms7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODcpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDI0O1xcbiAgXFxuICAgIGZvbnQtc3ludGhlc2lzOiBub25lO1xcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbn1cXG4gIFxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi13aWR0aDogMzIwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE5MSwgMjU1LCAwLjExOCk7XFxufVxcblxcbi5ib2FyZHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA0NTBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogODBweCA0NTBweDtcXG4gICAgY29sdW1uLWdhcDogMTByZW07XFxuICAgIG1hcmdpbi10b3A6IDRyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcbiAgXFxuLmNlbGwge1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcblxcbiAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDI0MCwgMjQ4LCAyNTUsIDAuNzIxKTtcXG59XFxuXFxuLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMjQwLCAyNDgsIDI1NSwgMC43MjEpO1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNjQ1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTI3LCAxNzcsIDAuODIyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uZGlzYWJsZWQge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgIFxcbn1cXG5cXG4uZ2FtZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmcjtcXG4gICAgY29sdW1uLWdhcDogN3JlbTtcXG4gICAgcm93LWdhcDogMXB4O1xcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbn1cXG5cXG4jZ2FtZWJvYXJkMS1jb250YWluZXIsICNnYW1lYm9hcmQyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGNvbHVtbi1nYXA6IDFweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIsIDEyNywgMTc3LCAwLjgyMik7XFxufVxcblxcbiNtZXNzYWdlLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDVyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbmgxLCBoMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyppbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vR2FtZSc7XG5pbXBvcnQgeyByZW5kZXJHYW1lQm9hcmRzLCBzdGF0dXNNZXNzYWdlIH0gZnJvbSAnLi9ET00nO1xuXG5jb25zdCBnYW1lID0gR2FtZSgpO1xuXG5nYW1lLnN0YXJ0R2FtZSgpXG5cbnJlbmRlckdhbWVCb2FyZHMoZ2FtZSk7XG5cbmZ1bmN0aW9uIGhhbmRsZUF0dGFjayhldmVudCkge1xuICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZS1jb250YWluZXInKVxuICBzdGF0dXMudGV4dENvbnRlbnQgPSBcIllvdSBzaG90IGFuZC4uLml0XFwnc1wiXG4gIGNvbnN0IGNsaWNrZWRDZWxsID0gZXZlbnQudGFyZ2V0O1xuICBjb25zdCBjb29yZGluYXRlcyA9IGdldENlbGxDb29yZGluYXRlcyhjbGlja2VkQ2VsbCk7XG5cbiAgY29uc3QgcGxheWVyMUF0dGFjayA9IGdhbWUucGxheWVyMS50YWtlVHVybihjb29yZGluYXRlcyk7XG4gIGNvbnN0IHJlc3VsdCA9IHBsYXllcjFBdHRhY2sucmVzdWx0O1xuXG4gIHVwZGF0ZUdhbWVCb2FyZFVJKCdnYW1lYm9hcmQyLWNvbnRhaW5lcicsIGNvb3JkaW5hdGVzLCByZXN1bHQpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZihyZXN1bHQpIHtcbiAgICAgIHN0YXR1cy50ZXh0Q29udGVudCArPSBcIiBoaXQhXCJcbiAgICB9ZWxzZSB7XG4gICAgICBzdGF0dXMudGV4dENvbnRlbnQgKz0gXCIgbWlzcyFcIlxuICAgIH1cbiAgfSwgMjAwMClcblxuICBpZiAoZ2FtZS5nYW1lYm9hcmQyLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgZW5kR2FtZSgnUGxheWVyIDEnKTtcbiAgfWVsc2Uge1xuICAgIHNldFRpbWVvdXQoYWlUdXJuLCAzMDAwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhaVR1cm4oKSB7XG4gIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlLWNvbnRhaW5lcicpXG4gIHN0YXR1cy50ZXh0Q29udGVudCA9ICdZb3VyIGVuZW15IGlzIGFpbWluZy4uLidcbiAgY29uc3QgcGxheWVyMkF0dGFjayA9IGdhbWUucGxheWVyMi50YWtlVHVybigpO1xuICBjb25zdCByZXN1bHQgPSBwbGF5ZXIyQXR0YWNrLnJlc3VsdDtcbiAgY29uc3QgY29vcmRpbmF0ZXMgPSBwbGF5ZXIyQXR0YWNrLmF0dGFjaztcblxuICB1cGRhdGVHYW1lQm9hcmRVSSgnZ2FtZWJvYXJkMS1jb250YWluZXInLCBjb29yZGluYXRlcywgcmVzdWx0KTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYocmVzdWx0KSB7XG4gICAgICBzdGF0dXMudGV4dENvbnRlbnQgPSBcIkVuZW15IGZpcmUgYSBzaG90IGFuZCBpdCdzIGEgaGl0IVwiXG4gICAgfWVsc2Uge1xuICAgICAgc3RhdHVzLnRleHRDb250ZW50ID0gXCJFbmVteSBmaXJlIGEgc2hvdCBhbmQgaXQncyBhIG1pc3MhXCJcbiAgICB9XG4gIH0sIDIwMDApXG4gIGlmIChnYW1lLmdhbWVib2FyZDEuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICBlbmRHYW1lKCdQbGF5ZXIgMicpO1xuICB9XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmQyLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQXR0YWNrKTtcblxuZnVuY3Rpb24gZ2V0Q2VsbENvb3JkaW5hdGVzKGNlbGwpIHtcbiAgY29uc3Qgcm93ID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm93JykpO1xuICBjb25zdCBjb2wgPSBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2wnKSk7XG4gIHJldHVybiBbcm93LCBjb2wgXTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlR2FtZUJvYXJkVUkoZ2FtZWJvYXJkQ29udGFpbmVyLCBjb29yZGluYXRlcywgcmVzdWx0KSB7XG4gIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChnYW1lYm9hcmRDb250YWluZXIpLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz1cIiR7Y29vcmRpbmF0ZXNbMF19XCJdW2RhdGEtY29sPVwiJHtjb29yZGluYXRlc1sxXX1cIl1gKTtcbiAgY29uc29sZS5sb2coJ2NhbGxlZCcpXG4gIGlmICghcmVzdWx0KSB7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gIH0gZWxzZSB7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgfVxuXG5cbiAgY2VsbC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQXR0YWNrKTtcbn1cblxuZnVuY3Rpb24gZW5kR2FtZSh3aW5uZXIpIHtcbiAgc3RhdHVzTWVzc2FnZSh3aW5uZXIpO1xufSAqL1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IEdhbWUgfSBmcm9tICcuL0dhbWUnO1xuaW1wb3J0IHsgcmVuZGVyR2FtZUJvYXJkcywgc3RhdHVzTWVzc2FnZSB9IGZyb20gJy4vRE9NJztcblxuY29uc3QgZ2FtZSA9IEdhbWUoKTtcblxuZ2FtZS5zdGFydEdhbWUoKTtcblxucmVuZGVyR2FtZUJvYXJkcyhnYW1lKTtcblxuZnVuY3Rpb24gaGFuZGxlQXR0YWNrKGV2ZW50KSB7XG4gIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlLWNvbnRhaW5lcicpO1xuICBzdGF0dXMudGV4dENvbnRlbnQgPSBcIllvdSBzaG90IGFuZC4uLml0J3NcIjtcbiAgY29uc3QgY2xpY2tlZENlbGwgPSBldmVudC50YXJnZXQ7XG4gIGNvbnN0IGNvb3JkaW5hdGVzID0gZ2V0Q2VsbENvb3JkaW5hdGVzKGNsaWNrZWRDZWxsKTtcblxuICBjb25zdCBwbGF5ZXIxQXR0YWNrID0gZ2FtZS5wbGF5ZXIxLnRha2VUdXJuKGNvb3JkaW5hdGVzKTtcbiAgY29uc3QgcmVzdWx0ID0gcGxheWVyMUF0dGFjay5yZXN1bHQ7XG5cbiAgdXBkYXRlR2FtZUJvYXJkVUkoJ2dhbWVib2FyZDItY29udGFpbmVyJywgY29vcmRpbmF0ZXMsIHJlc3VsdCk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHN0YXR1cy50ZXh0Q29udGVudCArPSBcIiBoaXQhXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXR1cy50ZXh0Q29udGVudCArPSBcIiBtaXNzIVwiO1xuICAgIH1cbiB9LCAyMDAwKTtcblxuICBpZiAoZ2FtZS5nYW1lYm9hcmQyLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgZW5kR2FtZSgnUGxheWVyIDEnKTtcbiAgfSBlbHNlIHtcbiAgICBzZXRUaW1lb3V0KGFpVHVybiwgMzAwMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWlUdXJuKCkge1xuICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZS1jb250YWluZXInKTtcbiAgc3RhdHVzLnRleHRDb250ZW50ID0gJ1lvdXIgZW5lbXkgaXMgYWltaW5nLi4uJztcbiAgY29uc3QgcGxheWVyMkF0dGFjayA9IGdhbWUucGxheWVyMi50YWtlVHVybigpO1xuICBjb25zdCByZXN1bHQgPSBwbGF5ZXIyQXR0YWNrLnJlc3VsdDtcbiAgY29uc3QgY29vcmRpbmF0ZXMgPSBwbGF5ZXIyQXR0YWNrLmF0dGFjaztcblxuICB1cGRhdGVHYW1lQm9hcmRVSSgnZ2FtZWJvYXJkMS1jb250YWluZXInLCBjb29yZGluYXRlcywgcmVzdWx0KTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgc3RhdHVzLnRleHRDb250ZW50ID0gXCJFbmVteSBmaXJlIGEgc2hvdCBhbmQgaXQncyBhIGhpdCFcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdHVzLnRleHRDb250ZW50ID0gXCJFbmVteSBmaXJlIGEgc2hvdCBhbmQgaXQncyBhIG1pc3MhXCI7XG4gICAgfVxuICB9LCAyMDAwKTtcbiAgaWYgKGdhbWUuZ2FtZWJvYXJkMS5hbGxTaGlwc1N1bmsoKSkge1xuICAgIGVuZEdhbWUoJ1BsYXllciAyJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0Q2VsbENvb3JkaW5hdGVzKGNlbGwpIHtcbiAgY29uc3Qgcm93ID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm93JykpO1xuICBjb25zdCBjb2wgPSBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2wnKSk7XG4gIHJldHVybiBbcm93LCBjb2xdO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVHYW1lQm9hcmRVSShnYW1lYm9hcmRDb250YWluZXIsIGNvb3JkaW5hdGVzLCByZXN1bHQpIHtcbiAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdhbWVib2FyZENvbnRhaW5lcikucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PVwiJHtjb29yZGluYXRlc1swXX1cIl1bZGF0YS1jb2w9XCIke2Nvb3JkaW5hdGVzWzFdfVwiXWApO1xuICBjb25zb2xlLmxvZygnY2FsbGVkJyk7XG4gIGlmICghcmVzdWx0KSB7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gIH0gZWxzZSB7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgfVxuXG4gIGNlbGwuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKTtcbiAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUF0dGFjayk7XG59XG5cbmZ1bmN0aW9uIGVuZEdhbWUod2lubmVyKSB7XG4gIC8vc3RhdHVzTWVzc2FnZSh3aW5uZXIpO1xuICBhbGVydCh3aW5uZXIpXG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmQyLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQXR0YWNrKTsiXSwibmFtZXMiOlsicmVuZGVyR2FtZUJvYXJkcyIsImdhbWUiLCJwbGF5ZXIxQm9hcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicGxheWVyMkJvYXJkIiwiaW5uZXJIVE1MIiwicmVuZGVyQm9hcmQiLCJnYW1lYm9hcmQxIiwiZ2FtZWJvYXJkMiIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVEcmFnU3RhcnQiLCJoYW5kbGVEcmFnT3ZlciIsImhhbmRsZURyb3AiLCJoYW5kbGVTaGlwUGxhY2VtZW50IiwiZ2FtZWJvYXJkIiwiY29udGFpbmVyIiwiaGlkZVNoaXBzIiwicm93IiwiYm9hcmQiLCJsZW5ndGgiLCJjb2wiLCJjZWxsIiwiY3JlYXRlQ2VsbCIsImFwcGVuZENoaWxkIiwiY29udGVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJkcmFnU2hpcCIsImV2ZW50IiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwic2hpcCIsInByZXZlbnREZWZhdWx0IiwiY29vcmRpbmF0ZXMiLCJnZXRTaGlwQ29vcmRpbmF0ZXMiLCJwYXJzZUludCIsInN1Y2Nlc3MiLCJwbGFjZVNoaXAiLCJzdGFydFJvdyIsInN0YXJ0Q29sIiwib3JpZW50YXRpb24iLCJpIiwicHVzaCIsImNyZWF0ZUFJUGxheWVyIiwiY3JlYXRlSHVtYW5QbGF5ZXIiLCJHYW1lYm9hcmQiLCJTaGlwIiwiR2FtZSIsInBsYXllcjEiLCJwbGF5ZXIyIiwiZ2FtZWJvYXJkMUNhcnJpZXIiLCJnYW1lYm9hcmQxQmF0dGxlc2hpcCIsImdhbWVib2FyZDFTYm1hcmluZSIsImdhbWVib2FyZDFEZXN0cm95ZXIiLCJnYW1lYm9hcmQxUGF0cm9sIiwiZ2FtZWJvYXJkMkNhcnJpZXIiLCJnYW1lYm9hcmQyQmF0dGxlc2hpcCIsImdhbWVib2FyZDJTYm1hcmluZSIsImdhbWVib2FyZDJEZXN0cm95ZXIiLCJnYW1lYm9hcmQyUGF0cm9sIiwic3RhcnRHYW1lIiwiYm9hcmRTaXplIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwic2hpcHMiLCJtaXNzZWRBdHRhY2tzIiwiaXNWYWxpZENvb3JkaW5hdGVzIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsIl9zdGVwJHZhbHVlIiwidmFsdWUiLCJlcnIiLCJlIiwiZiIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJfc3RlcDIkdmFsdWUiLCJyZWNlaXZlQXR0YWNrIiwiYXR0YWNrIiwiX2F0dGFjayIsIl9zbGljZWRUb0FycmF5IiwiSGl0IiwiaXNTdW5rIiwic3VuayIsImFsbFNoaXBzU3VuayIsImV2ZXJ5Iiwib3Bwb25lbnRHYW1lYm9hcmQiLCJhdHRhY2tlZENvb3JkaW5hdGVzIiwiU2V0IiwicmFuZG9tQXR0YWNrIiwiYXZhaWxhYmxlQ29vcmRpbmF0ZXMiLCJoYXMiLCJKU09OIiwic3RyaW5naWZ5IiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0YWtlVHVybiIsInJlc3VsdCIsImF0dGFja0Nvb3JkaW5hdGVzIiwiaGl0Iiwic3RhdHVzTWVzc2FnZSIsImhhbmRsZUF0dGFjayIsInN0YXR1cyIsInRleHRDb250ZW50IiwiY2xpY2tlZENlbGwiLCJnZXRDZWxsQ29vcmRpbmF0ZXMiLCJwbGF5ZXIxQXR0YWNrIiwidXBkYXRlR2FtZUJvYXJkVUkiLCJzZXRUaW1lb3V0IiwiZW5kR2FtZSIsImFpVHVybiIsInBsYXllcjJBdHRhY2siLCJnYW1lYm9hcmRDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiY29uY2F0IiwiY29uc29sZSIsImxvZyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ3aW5uZXIiLCJhbGVydCJdLCJzb3VyY2VSb290IjoiIn0=