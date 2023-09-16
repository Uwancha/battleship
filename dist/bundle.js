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
/* harmony export */   renderGameBoards: () => (/* binding */ renderGameBoards),
/* harmony export */   statusMessage: () => (/* binding */ statusMessage)
/* harmony export */ });
function renderGameBoards(game) {
  var player1Board = document.getElementById('gameboard1-container');
  var player2Board = document.getElementById('gameboard2-container');
  player1Board.innerHTML = '';
  player2Board.innerHTML = '';
  renderBoard(game.gameboard1, player1Board);
  renderBoard(game.gameboard2, player2Board, true);
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
  } else {
    if (!hideShips) {
      cell.classList.add('ship');
    } else {
      cell.classList.add('cell');
    }
  }
  return cell;
}
function statusMessage(message) {
  var messageContainer = document.getElementById('message-container');
  messageContainer.textContent = message;
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



var game = (0,_Game__WEBPACK_IMPORTED_MODULE_1__.Game)();
game.startGame();
(0,_DOM__WEBPACK_IMPORTED_MODULE_2__.renderGameBoards)(game);
function handleAttack(event) {
  var status = document.getElementById('message-container');
  status.textContent = "You shot and...it\'s";
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
document.getElementById('gameboard2-container').addEventListener('click', handleAttack);
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
  (0,_DOM__WEBPACK_IMPORTED_MODULE_2__.statusMessage)(winner);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNN0UsSUFBSSxHQUFHZCxRQUFRLENBQUNDLGNBQWMsQ0FBQzRHLGtCQUFrQixDQUFDLENBQUNDLGFBQWEsZ0JBQUFDLE1BQUEsQ0FBZTNELFdBQVcsQ0FBQyxDQUFDLENBQUMscUJBQUEyRCxNQUFBLENBQWdCM0QsV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFJLENBQUM7RUFDdEk0RCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7RUFDckIsSUFBSSxDQUFDdEIsTUFBTSxFQUFFO0lBQ1g3RSxJQUFJLENBQUNNLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztFQUM1QixDQUFDLE1BQU07SUFDTFAsSUFBSSxDQUFDTSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7RUFDM0I7RUFHQVAsSUFBSSxDQUFDTSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxVQUFVLENBQUM7RUFDOUJQLElBQUksQ0FBQ29HLG1CQUFtQixDQUFDLE9BQU8sRUFBRXBCLFlBQVksQ0FBQztBQUNqRDtBQUVBLFNBQVNTLE9BQU9BLENBQUNZLE1BQU0sRUFBRTtFQUN2QjdGLG1EQUFhLENBQUM2RixNQUFNLENBQUM7QUFDdkIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvR2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHJlbmRlckdhbWVCb2FyZHMoZ2FtZSkge1xuICBjb25zdCBwbGF5ZXIxQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkMS1jb250YWluZXInKTtcbiAgY29uc3QgcGxheWVyMkJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVib2FyZDItY29udGFpbmVyJyk7XG5cbiAgcGxheWVyMUJvYXJkLmlubmVySFRNTCA9ICcnO1xuICBwbGF5ZXIyQm9hcmQuaW5uZXJIVE1MID0gJyc7XG5cbiAgcmVuZGVyQm9hcmQoZ2FtZS5nYW1lYm9hcmQxLCBwbGF5ZXIxQm9hcmQpO1xuICByZW5kZXJCb2FyZChnYW1lLmdhbWVib2FyZDIsIHBsYXllcjJCb2FyZCwgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckJvYXJkKGdhbWVib2FyZCwgY29udGFpbmVyLCBoaWRlU2hpcHMpIHtcbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgZ2FtZWJvYXJkLmJvYXJkLmxlbmd0aDsgcm93KyspIHtcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBnYW1lYm9hcmQuYm9hcmRbcm93XS5sZW5ndGg7IGNvbCsrKSB7XG4gICAgICBjb25zdCBjZWxsID0gY3JlYXRlQ2VsbChyb3csIGNvbCwgZ2FtZWJvYXJkLmJvYXJkW3Jvd11bY29sXSwgaGlkZVNoaXBzKTtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2VsbChyb3csIGNvbCwgY29udGVudCwgaGlkZVNoaXBzKSB7XG4gIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcm93Jywgcm93KTtcbiAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29sJywgY29sKTtcblxuICBpZiAoY29udGVudCA9PT0gbnVsbCkge1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICB9IGVsc2Uge1xuICAgIGlmICghaGlkZVNoaXBzKSB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICB9ZWxzZSB7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2VsbDtcbn1cblxuZnVuY3Rpb24gc3RhdHVzTWVzc2FnZShtZXNzYWdlKSB7XG4gIGNvbnN0IG1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZS1jb250YWluZXInKTtcbiAgbWVzc2FnZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG59XG5cbmV4cG9ydCB7IHJlbmRlckdhbWVCb2FyZHMsIHN0YXR1c01lc3NhZ2UgfTsiLCJpbXBvcnQgeyBjcmVhdGVBSVBsYXllciwgY3JlYXRlSHVtYW5QbGF5ZXIgfSBmcm9tICcuL1BsYXllcic7XG5pbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tICcuL0dhbWVib2FyZCc7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9TaGlwJztcblxuZnVuY3Rpb24gR2FtZSgpIHtcbiAgY29uc3QgZ2FtZWJvYXJkMSA9IEdhbWVib2FyZCgpO1xuICBjb25zdCBnYW1lYm9hcmQyID0gR2FtZWJvYXJkKCk7XG4gIGNvbnN0IHBsYXllcjEgPSBjcmVhdGVIdW1hblBsYXllcihnYW1lYm9hcmQyKTtcbiAgY29uc3QgcGxheWVyMiA9IGNyZWF0ZUFJUGxheWVyKGdhbWVib2FyZDEpO1xuXG4gIGNvbnN0IGdhbWVib2FyZDFDYXJyaWVyID0gU2hpcCg1KTtcbiAgY29uc3QgZ2FtZWJvYXJkMUJhdHRsZXNoaXAgPSBTaGlwKDQpO1xuICBjb25zdCBnYW1lYm9hcmQxU2JtYXJpbmUgPSBTaGlwKDMpO1xuICBjb25zdCBnYW1lYm9hcmQxRGVzdHJveWVyID0gU2hpcCgzKTtcbiAgY29uc3QgZ2FtZWJvYXJkMVBhdHJvbD0gU2hpcCgyKTtcbiAgXG5cbiAgY29uc3QgZ2FtZWJvYXJkMkNhcnJpZXIgPSBTaGlwKDUpO1xuICBjb25zdCBnYW1lYm9hcmQyQmF0dGxlc2hpcCA9IFNoaXAoNCk7XG4gIGNvbnN0IGdhbWVib2FyZDJTYm1hcmluZSA9IFNoaXAoMyk7XG4gIGNvbnN0IGdhbWVib2FyZDJEZXN0cm95ZXIgPSBTaGlwKDMpO1xuICBjb25zdCBnYW1lYm9hcmQyUGF0cm9sPSBTaGlwKDIpO1xuICBcbiAgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuXG4gICAgZ2FtZWJvYXJkMS5wbGFjZVNoaXAoZ2FtZWJvYXJkMUNhcnJpZXIsIFtcbiAgICAgIHsgcm93OiAwLCBjb2w6IDAgfSxcbiAgICAgIHsgcm93OiAwLCBjb2w6IDEgfSxcbiAgICAgIHsgcm93OiAwLCBjb2w6IDIgfSxcbiAgICAgIHsgcm93OiAwLCBjb2w6IDMgfSxcbiAgICAgIHsgcm93OiAwLCBjb2w6IDQgfSxcbiAgICBdKTtcbiAgICBnYW1lYm9hcmQxLnBsYWNlU2hpcChnYW1lYm9hcmQxQmF0dGxlc2hpcCwgW1xuICAgICAgeyByb3c6IDUsIGNvbDogNSB9LFxuICAgICAgeyByb3c6IDYsIGNvbDogNSB9LFxuICAgICAgeyByb3c6IDcsIGNvbDogNSB9LFxuICAgICAgeyByb3c6IDgsIGNvbDogNSB9LFxuICAgIF0pO1xuICAgIGdhbWVib2FyZDEucGxhY2VTaGlwKGdhbWVib2FyZDFTYm1hcmluZSwgW1xuICAgICAgeyByb3c6IDIsIGNvbDogMCB9LFxuICAgICAgeyByb3c6IDIsIGNvbDogMSB9LFxuICAgICAgeyByb3c6IDIsIGNvbDogMiB9LFxuICAgIF0pO1xuICAgIGdhbWVib2FyZDEucGxhY2VTaGlwKGdhbWVib2FyZDFEZXN0cm95ZXIsIFtcbiAgICAgIHsgcm93OiA1LCBjb2w6IDkgfSxcbiAgICAgIHsgcm93OiA2LCBjb2w6IDkgfSxcbiAgICAgIHsgcm93OiA3LCBjb2w6IDkgfSxcbiAgICBdKTtcbiAgICBnYW1lYm9hcmQxLnBsYWNlU2hpcChnYW1lYm9hcmQxUGF0cm9sLCBbXG4gICAgICB7IHJvdzogNCwgY29sOiAwIH0sXG4gICAgICB7IHJvdzogNCwgY29sOiAxIH0sXG4gICAgXSk7XG4gIFxuICAgIGdhbWVib2FyZDIucGxhY2VTaGlwKGdhbWVib2FyZDJDYXJyaWVyLCBbXG4gICAgICB7IHJvdzogMCwgY29sOiAwIH0sXG4gICAgICB7IHJvdzogMCwgY29sOiAxIH0sXG4gICAgICB7IHJvdzogMCwgY29sOiAyIH0sXG4gICAgICB7IHJvdzogMCwgY29sOiAzIH0sXG4gICAgICB7IHJvdzogMCwgY29sOiA0IH0sXG4gICAgXSk7XG4gICAgZ2FtZWJvYXJkMi5wbGFjZVNoaXAoZ2FtZWJvYXJkMkJhdHRsZXNoaXAsIFtcbiAgICAgIHsgcm93OiA1LCBjb2w6IDUgfSxcbiAgICAgIHsgcm93OiA2LCBjb2w6IDUgfSxcbiAgICAgIHsgcm93OiA3LCBjb2w6IDUgfSxcbiAgICAgIHsgcm93OiA4LCBjb2w6IDUgfSxcbiAgICBdKTtcbiAgICBnYW1lYm9hcmQyLnBsYWNlU2hpcChnYW1lYm9hcmQyU2JtYXJpbmUsIFtcbiAgICAgIHsgcm93OiA1LCBjb2w6IDkgfSxcbiAgICAgIHsgcm93OiA2LCBjb2w6IDkgfSxcbiAgICAgIHsgcm93OiA3LCBjb2w6IDkgfSxcbiAgICBdKTtcbiAgICBnYW1lYm9hcmQyLnBsYWNlU2hpcChnYW1lYm9hcmQyRGVzdHJveWVyLCBbXG4gICAgICB7IHJvdzogMiwgY29sOiAwIH0sXG4gICAgICB7IHJvdzogMiwgY29sOiAxIH0sXG4gICAgICB7IHJvdzogMiwgY29sOiAyIH0sXG4gICAgXSk7XG4gICAgZ2FtZWJvYXJkMi5wbGFjZVNoaXAoZ2FtZWJvYXJkMlBhdHJvbCwgW1xuICAgICAgeyByb3c6IDQsIGNvbDogMCB9LFxuICAgICAgeyByb3c6IDQsIGNvbDogMSB9LFxuICAgIF0pO1xuXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN0YXJ0R2FtZSxcbiAgICBwbGF5ZXIxLFxuICAgIHBsYXllcjIsXG4gICAgZ2FtZWJvYXJkMSxcbiAgICBnYW1lYm9hcmQyLFxuICB9O1xufVxuXG5leHBvcnQgeyBHYW1lIH07XG5cbiIsImNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBib2FyZFNpemUgPSAxMDtcbiAgICBjb25zdCBib2FyZCA9IEFycmF5KGJvYXJkU2l6ZSkuZmlsbChudWxsKS5tYXAoKCkgPT4gQXJyYXkoYm9hcmRTaXplKS5maWxsKG51bGwpKTtcbiAgICBjb25zdCBzaGlwcyA9IFtdO1xuICAgIGNvbnN0IG1pc3NlZEF0dGFja3MgPSBbXTtcbiAgXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICBpZiAoIWlzVmFsaWRDb29yZGluYXRlcyhjb29yZGluYXRlcykpIHJldHVybiBmYWxzZTtcbiAgXG4gICAgICBmb3IgKGNvbnN0IHsgcm93LCBjb2wgfSBvZiBjb29yZGluYXRlcykge1xuICAgICAgICBib2FyZFtyb3ddW2NvbF0gPSBzaGlwO1xuICAgICAgfVxuICBcbiAgICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICBcbiAgICBjb25zdCBpc1ZhbGlkQ29vcmRpbmF0ZXMgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICAgIGZvciAoY29uc3QgeyByb3csIGNvbCB9IG9mIGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGlmIChyb3cgPCAwIHx8IHJvdyA+PSBib2FyZFNpemUgfHwgY29sIDwgMCB8fCBjb2wgPj0gYm9hcmRTaXplIHx8IGJvYXJkW3Jvd11bY29sXSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChhdHRhY2spID0+IHtcbiAgICAgIGNvbnN0IFtyb3csIGNvbF0gPSBhdHRhY2s7XG4gIFxuICAgICAgaWYgKGJvYXJkW3Jvd11bY29sXSA9PT0gbnVsbCkge1xuICAgICAgICBtaXNzZWRBdHRhY2tzLnB1c2goYXR0YWNrKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICBcbiAgICAgIGNvbnN0IHNoaXAgPSBib2FyZFtyb3ddW2NvbF07XG4gICAgICBzaGlwLkhpdCgpO1xuICBcbiAgICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgIHNoaXAuc3VuayA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGJvYXJkW3Jvd11bY29sXSA9IG51bGw7XG4gIFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgXG4gICAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIHNoaXBzLmV2ZXJ5KHNoaXAgPT4gc2hpcC5zdW5rKTtcbiAgICB9O1xuICBcbiAgICByZXR1cm4ge1xuICAgICAgICBib2FyZCxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBhbGxTaGlwc1N1bmssXG4gICAgICAgIG1pc3NlZEF0dGFja3MsXG4gICAgfTtcbiAgfTtcbiAgXG4gIGV4cG9ydCB7IEdhbWVib2FyZCB9OyIsImZ1bmN0aW9uIGNyZWF0ZUFJUGxheWVyKG9wcG9uZW50R2FtZWJvYXJkKSB7XG4gICAgY29uc3QgYXR0YWNrZWRDb29yZGluYXRlcyA9IG5ldyBTZXQoKTtcblxuICAgIGZ1bmN0aW9uIHJhbmRvbUF0dGFjaygpIHtcbiAgICAgICAgbGV0IGF2YWlsYWJsZUNvb3JkaW5hdGVzID0gW107XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gW3JvdywgY29sXTtcbiAgICAgICAgICAgICAgICBpZiAoIWF0dGFja2VkQ29vcmRpbmF0ZXMuaGFzKEpTT04uc3RyaW5naWZ5KGNvb3JkaW5hdGVzKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlQ29vcmRpbmF0ZXMucHVzaChjb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGF2YWlsYWJsZUNvb3JkaW5hdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZUNvb3JkaW5hdGVzLmxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIGF2YWlsYWJsZUNvb3JkaW5hdGVzW3JhbmRvbUluZGV4XTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdGFrZVR1cm4oKSB7XG5cbiAgICAgICAgbGV0IGF0dGFjaztcbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgYXR0YWNrID0gcmFuZG9tQXR0YWNrKCk7XG4gICAgICAgICAgICBpZiAoYXR0YWNrID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gXCJBbGwgY29vcmRpbmF0ZXMgYXR0YWNrZWRcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gb3Bwb25lbnRHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhhdHRhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlIChyZXN1bHQgPT09IFwiQWxyZWFkeSBhdHRhY2tlZFwiKTtcblxuICAgICAgICBpZiAoYXR0YWNrICE9PSBudWxsKSB7XG4gICAgICAgICAgICBhdHRhY2tlZENvb3JkaW5hdGVzLmFkZChKU09OLnN0cmluZ2lmeShhdHRhY2spKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHsgYXR0YWNrLCAgcmVzdWx0IH07XG4gICAgfTtcbiBcbiAgICByZXR1cm4geyB0YWtlVHVybiB9O1xufTtcblxuZnVuY3Rpb24gY3JlYXRlSHVtYW5QbGF5ZXIob3Bwb25lbnRHYW1lYm9hcmQpIHtcbiAgICBmdW5jdGlvbiB0YWtlVHVybihhdHRhY2tDb29yZGluYXRlcykge1xuICAgICAgY29uc3QgcmVzdWx0ID0gb3Bwb25lbnRHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhhdHRhY2tDb29yZGluYXRlcyk7XG4gICAgICByZXR1cm4geyBhdHRhY2s6IGF0dGFja0Nvb3JkaW5hdGVzLCByZXN1bHQgfTtcbiAgICB9XG4gIFxuICAgIHJldHVybiB7IHRha2VUdXJuIH07XG4gIH1cbiAgXG5cbmV4cG9ydCB7IGNyZWF0ZUFJUGxheWVyLCBjcmVhdGVIdW1hblBsYXllciB9OyIsImZ1bmN0aW9uIFNoaXAobGVuZ3RoKSB7XG4gICAgaWYgKGxlbmd0aCA8PSAwKSByZXR1cm4gJ0ludmFsaWQgU2hpcCc7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxlbmd0aCxcbiAgICAgIGhpdDogMCxcbiAgICAgIHN1bms6IGZhbHNlLFxuICBcbiAgICAgIEhpdCgpIHtcbiAgICAgICAgdGhpcy5oaXQgKz0gMTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGl0O1xuICAgICAgfSxcbiAgXG4gICAgICBpc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhpdCA+PSB0aGlzLmxlbmd0aDtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuICBcbiAgZXhwb3J0IHsgU2hpcCB9OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgZm9udC1mYW1pbHk6IEludGVyLCBzeXN0ZW0tdWksIEF2ZW5pciwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIFxuICAgIGNvbG9yLXNjaGVtZTogbGlnaHQgZGFyaztcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQyNDI0O1xuICBcbiAgICBmb250LXN5bnRoZXNpczogbm9uZTtcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xufVxuICBcbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTkxLCAyNTUsIDAuMTE4KTtcbn1cblxuLmJvYXJkcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCA0NTBweCk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IDQ1MHB4O1xuICAgIGNvbHVtbi1nYXA6IDEwcmVtO1xuICAgIG1hcmdpbi10b3A6IDRyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbiAgXG4uY2VsbCB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgyNDAsIDI0OCwgMjU1LCAwLjcyMSk7XG59XG5cbi5zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgyNDAsIDI0OCwgMjU1LCAwLjcyMSk7XG59XG5cbi5oaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjY0NSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubWlzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMjcsIDE3NywgMC44MjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmRpc2FibGVkIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgIFxufVxuXG4uZ2FtZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnI7XG4gICAgY29sdW1uLWdhcDogN3JlbTtcbiAgICByb3ctZ2FwOiAxcHg7XG4gICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xufVxuXG4jZ2FtZWJvYXJkMS1jb250YWluZXIsICNnYW1lYm9hcmQyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBjb2x1bW4tZ2FwOiAxcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMjcsIDE3NywgMC44MjIpO1xufVxuXG4jbWVzc2FnZS1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxuaDEsIGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4gIGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1FQUFtRTtJQUNuRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCOztJQUVoQix3QkFBd0I7SUFDeEIsZ0NBQWdDO0lBQ2hDLHlCQUF5Qjs7SUFFekIsb0JBQW9CO0lBQ3BCLGtDQUFrQztJQUNsQyxtQ0FBbUM7SUFDbkMsa0NBQWtDO0lBQ2xDLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7O0lBRVosNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLHdDQUF3QztJQUN4QyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkMsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICBmb250LWZhbWlseTogSW50ZXIsIHN5c3RlbS11aSwgQXZlbmlyLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgXFxuICAgIGNvbG9yLXNjaGVtZTogbGlnaHQgZGFyaztcXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44Nyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI0MjQ7XFxuICBcXG4gICAgZm9udC1zeW50aGVzaXM6IG5vbmU7XFxuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxufVxcbiAgXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLXdpZHRoOiAzMjBweDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTkxLCAyNTUsIDAuMTE4KTtcXG59XFxuXFxuLmJvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDQ1MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IDQ1MHB4O1xcbiAgICBjb2x1bW4tZ2FwOiAxMHJlbTtcXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuICBcXG4uY2VsbCB7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuXFxuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMjQwLCAyNDgsIDI1NSwgMC43MjEpO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgyNDAsIDI0OCwgMjU1LCAwLjcyMSk7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42NDUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMjcsIDE3NywgMC44MjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5kaXNhYmxlZCB7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyAgXFxufVxcblxcbi5nYW1lLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyO1xcbiAgICBjb2x1bW4tZ2FwOiA3cmVtO1xcbiAgICByb3ctZ2FwOiAxcHg7XFxuICAgIG1pbi13aWR0aDogMzIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxufVxcblxcbiNnYW1lYm9hcmQxLWNvbnRhaW5lciwgI2dhbWVib2FyZDItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgY29sdW1uLWdhcDogMXB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTI3LCAxNzcsIDAuODIyKTtcXG59XFxuXFxuI21lc3NhZ2UtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuaDEsIGgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4gIFwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gJy4vR2FtZSc7XG5pbXBvcnQgeyByZW5kZXJHYW1lQm9hcmRzLCBzdGF0dXNNZXNzYWdlIH0gZnJvbSAnLi9ET00nO1xuXG5jb25zdCBnYW1lID0gR2FtZSgpO1xuXG5nYW1lLnN0YXJ0R2FtZSgpXG5cbnJlbmRlckdhbWVCb2FyZHMoZ2FtZSk7XG5cbmZ1bmN0aW9uIGhhbmRsZUF0dGFjayhldmVudCkge1xuICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZS1jb250YWluZXInKVxuICBzdGF0dXMudGV4dENvbnRlbnQgPSBcIllvdSBzaG90IGFuZC4uLml0XFwnc1wiXG4gIGNvbnN0IGNsaWNrZWRDZWxsID0gZXZlbnQudGFyZ2V0O1xuICBjb25zdCBjb29yZGluYXRlcyA9IGdldENlbGxDb29yZGluYXRlcyhjbGlja2VkQ2VsbCk7XG5cbiAgY29uc3QgcGxheWVyMUF0dGFjayA9IGdhbWUucGxheWVyMS50YWtlVHVybihjb29yZGluYXRlcyk7XG4gIGNvbnN0IHJlc3VsdCA9IHBsYXllcjFBdHRhY2sucmVzdWx0O1xuXG4gIHVwZGF0ZUdhbWVCb2FyZFVJKCdnYW1lYm9hcmQyLWNvbnRhaW5lcicsIGNvb3JkaW5hdGVzLCByZXN1bHQpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZihyZXN1bHQpIHtcbiAgICAgIHN0YXR1cy50ZXh0Q29udGVudCArPSBcIiBoaXQhXCJcbiAgICB9ZWxzZSB7XG4gICAgICBzdGF0dXMudGV4dENvbnRlbnQgKz0gXCIgbWlzcyFcIlxuICAgIH1cbiAgfSwgMjAwMClcblxuICBpZiAoZ2FtZS5nYW1lYm9hcmQyLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgZW5kR2FtZSgnUGxheWVyIDEnKTtcbiAgfWVsc2Uge1xuICAgIHNldFRpbWVvdXQoYWlUdXJuLCAzMDAwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhaVR1cm4oKSB7XG4gIGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlLWNvbnRhaW5lcicpXG4gIHN0YXR1cy50ZXh0Q29udGVudCA9ICdZb3VyIGVuZW15IGlzIGFpbWluZy4uLidcbiAgY29uc3QgcGxheWVyMkF0dGFjayA9IGdhbWUucGxheWVyMi50YWtlVHVybigpO1xuICBjb25zdCByZXN1bHQgPSBwbGF5ZXIyQXR0YWNrLnJlc3VsdDtcbiAgY29uc3QgY29vcmRpbmF0ZXMgPSBwbGF5ZXIyQXR0YWNrLmF0dGFjaztcblxuICB1cGRhdGVHYW1lQm9hcmRVSSgnZ2FtZWJvYXJkMS1jb250YWluZXInLCBjb29yZGluYXRlcywgcmVzdWx0KTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYocmVzdWx0KSB7XG4gICAgICBzdGF0dXMudGV4dENvbnRlbnQgPSBcIkVuZW15IGZpcmUgYSBzaG90IGFuZCBpdCdzIGEgaGl0IVwiXG4gICAgfWVsc2Uge1xuICAgICAgc3RhdHVzLnRleHRDb250ZW50ID0gXCJFbmVteSBmaXJlIGEgc2hvdCBhbmQgaXQncyBhIG1pc3MhXCJcbiAgICB9XG4gIH0sIDIwMDApXG4gIGlmIChnYW1lLmdhbWVib2FyZDEuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICBlbmRHYW1lKCdQbGF5ZXIgMicpO1xuICB9XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmQyLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQXR0YWNrKTtcblxuZnVuY3Rpb24gZ2V0Q2VsbENvb3JkaW5hdGVzKGNlbGwpIHtcbiAgY29uc3Qgcm93ID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcm93JykpO1xuICBjb25zdCBjb2wgPSBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2wnKSk7XG4gIHJldHVybiBbcm93LCBjb2wgXTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlR2FtZUJvYXJkVUkoZ2FtZWJvYXJkQ29udGFpbmVyLCBjb29yZGluYXRlcywgcmVzdWx0KSB7XG4gIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChnYW1lYm9hcmRDb250YWluZXIpLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz1cIiR7Y29vcmRpbmF0ZXNbMF19XCJdW2RhdGEtY29sPVwiJHtjb29yZGluYXRlc1sxXX1cIl1gKTtcbiAgY29uc29sZS5sb2coJ2NhbGxlZCcpXG4gIGlmICghcmVzdWx0KSB7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gIH0gZWxzZSB7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgfVxuXG5cbiAgY2VsbC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpO1xuICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQXR0YWNrKTtcbn1cblxuZnVuY3Rpb24gZW5kR2FtZSh3aW5uZXIpIHtcbiAgc3RhdHVzTWVzc2FnZSh3aW5uZXIpO1xufSJdLCJuYW1lcyI6WyJyZW5kZXJHYW1lQm9hcmRzIiwiZ2FtZSIsInBsYXllcjFCb2FyZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwbGF5ZXIyQm9hcmQiLCJpbm5lckhUTUwiLCJyZW5kZXJCb2FyZCIsImdhbWVib2FyZDEiLCJnYW1lYm9hcmQyIiwiZ2FtZWJvYXJkIiwiY29udGFpbmVyIiwiaGlkZVNoaXBzIiwicm93IiwiYm9hcmQiLCJsZW5ndGgiLCJjb2wiLCJjZWxsIiwiY3JlYXRlQ2VsbCIsImFwcGVuZENoaWxkIiwiY29udGVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdGF0dXNNZXNzYWdlIiwibWVzc2FnZSIsIm1lc3NhZ2VDb250YWluZXIiLCJ0ZXh0Q29udGVudCIsImNyZWF0ZUFJUGxheWVyIiwiY3JlYXRlSHVtYW5QbGF5ZXIiLCJHYW1lYm9hcmQiLCJTaGlwIiwiR2FtZSIsInBsYXllcjEiLCJwbGF5ZXIyIiwiZ2FtZWJvYXJkMUNhcnJpZXIiLCJnYW1lYm9hcmQxQmF0dGxlc2hpcCIsImdhbWVib2FyZDFTYm1hcmluZSIsImdhbWVib2FyZDFEZXN0cm95ZXIiLCJnYW1lYm9hcmQxUGF0cm9sIiwiZ2FtZWJvYXJkMkNhcnJpZXIiLCJnYW1lYm9hcmQyQmF0dGxlc2hpcCIsImdhbWVib2FyZDJTYm1hcmluZSIsImdhbWVib2FyZDJEZXN0cm95ZXIiLCJnYW1lYm9hcmQyUGF0cm9sIiwic3RhcnRHYW1lIiwicGxhY2VTaGlwIiwiYm9hcmRTaXplIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwic2hpcHMiLCJtaXNzZWRBdHRhY2tzIiwic2hpcCIsImNvb3JkaW5hdGVzIiwiaXNWYWxpZENvb3JkaW5hdGVzIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJuIiwiZG9uZSIsIl9zdGVwJHZhbHVlIiwidmFsdWUiLCJlcnIiLCJlIiwiZiIsInB1c2giLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiX3N0ZXAyJHZhbHVlIiwicmVjZWl2ZUF0dGFjayIsImF0dGFjayIsIl9hdHRhY2siLCJfc2xpY2VkVG9BcnJheSIsIkhpdCIsImlzU3VuayIsInN1bmsiLCJhbGxTaGlwc1N1bmsiLCJldmVyeSIsIm9wcG9uZW50R2FtZWJvYXJkIiwiYXR0YWNrZWRDb29yZGluYXRlcyIsIlNldCIsInJhbmRvbUF0dGFjayIsImF2YWlsYWJsZUNvb3JkaW5hdGVzIiwiaGFzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidGFrZVR1cm4iLCJyZXN1bHQiLCJhdHRhY2tDb29yZGluYXRlcyIsImhpdCIsImhhbmRsZUF0dGFjayIsImV2ZW50Iiwic3RhdHVzIiwiY2xpY2tlZENlbGwiLCJ0YXJnZXQiLCJnZXRDZWxsQ29vcmRpbmF0ZXMiLCJwbGF5ZXIxQXR0YWNrIiwidXBkYXRlR2FtZUJvYXJkVUkiLCJzZXRUaW1lb3V0IiwiZW5kR2FtZSIsImFpVHVybiIsInBsYXllcjJBdHRhY2siLCJhZGRFdmVudExpc3RlbmVyIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJnYW1lYm9hcmRDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwiY29uY2F0IiwiY29uc29sZSIsImxvZyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ3aW5uZXIiXSwic291cmNlUm9vdCI6IiJ9