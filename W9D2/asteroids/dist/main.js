/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Utilities = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\n\nfunction Asteroid(pos,game) {\n  obj = {\n    color: Asteroid.COLOR,\n    radius: Asteroid.RADIUS,\n    pos: pos,\n    vel: Utilities.randomVec(5),\n    game: game\n  };\n  MovingObject.call(this, obj);\n}\n\nUtilities.inherits(Asteroid,MovingObject);\n\nAsteroid.prototype.collideWith = function (otherObject){\n  if(otherObject instanceof Ship){\n    otherObject.relocate(this.game);\n  }\n};\n\n\n\nAsteroid.COLOR = \"#00FF00\";\nAsteroid.RADIUS = 20;\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// const MovingObject = require('./moving_object.js');\n// const Utilities = require('./utils.js');\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nfunction Game (canvas){\n  this.ctx = canvas.getContext('2d');\n  this.canvas = canvas;\n  this.dimensions = { width: canvas.width,height: canvas.height};\n  this.asteroids = [];\n  this.ship = new Ship(this.randomPosition(),this);\n\n  while (this.asteroids.length < Game.ASTEROIDS){\n    this.addAsteroids();\n  }\n  console.log(this.asteroids);\n}\n\nGame.prototype.addAsteroids =function(){\n  let aster = new Asteroid(this.randomPosition(),this);\n  this.asteroids.push(aster);\n};\n\nGame.prototype.randomPosition = function(){\n  return [Math.floor(Math.random() * this.dimensions['width']), Math.floor(Math.random() * this.dimensions['height'])];\n};\n\nGame.prototype.draw = function(ctx){\n  ctx.clearRect(0, 0, this.dimensions['width'], this.dimensions['height']);\n  this.allObjects().forEach(ast => {\n    ast.draw(ctx);\n  });\n};\n\nGame.prototype.moveObjects = function(){\n  this.allObjects().forEach(ast =>{\n    ast.move();\n  });\n\n};\n\nGame.prototype.wrap = function(pos){\n  if(pos[0] > Game.DIM_X+Asteroid.RADIUS){\n    pos[0] = 0;\n  } else if (pos[0] < 0 - Asteroid.RADIUS){\n    pos[0]= 1000;\n  }\n  if (pos[1] > Game.DIM_Y + Asteroid.RADIUS) {\n    pos[1] = 0;\n  } else if (pos[1] < 0 - Asteroid.RADIUS) {\n    pos[1] = 600;\n  }\n\n  return pos;\n};\n\nGame.prototype.checkCollisions = function(){\n  this.allObjects().forEach(obj1 => {\n    this.allObjects().forEach(obj2 => {\n      if (obj1.isCollidedWith(obj2) && obj1 !== obj2){\n        obj1.collideWith(obj2);\n      }\n    });\n  });\n};\n\nGame.prototype.step = function(){\n  this.moveObjects();\n  this.checkCollisions();\n\n};\nGame.prototype.remove = function(aster){\n  index_of_aster = this.asteroids.indexOf(aster);\n  // delete asteroids[index_of_aster];\n  this.asteroids = this.asteroids.slice(0,index_of_aster).concat(this.asteroids.slice(index_of_aster+1));\n};\n\nGame.prototype.allObjects = function (){\n  let objects = [...this.asteroids];\n  objects.push(this.ship);\n  return objects;\n};\n\nGame.DIM_X = 1000;\nGame.DIM_Y = 600;\nGame.ASTEROIDS = 10;\n\nmodule.exports= Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction GameView(ctx,game) {\n  this.ctx = ctx;\n  this.game = game;\n  // this.game.addAsteroids();\n}\n\nGameView.prototype.start = function(){\n  console.log(this);\n  setInterval(this.game.step.bind(this.game), 20);\n  setInterval(this.game.draw.bind(this.game, this.ctx), 20);\n  // setInterval(function () { view.moveObjects(); view.draw(ctx); }, 20);\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log(\"Webpack is working!\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nwindow.MovingObject = MovingObject;\nwindow.GameView = GameView;\nwindow.Game = Game;\nwindow.addEventListener('DOMContentLoaded', (event) => {\n  // console.log(event);\n  const canvas = document.getElementById('game-canvas');\n  let ctx = canvas.getContext(\"2d\");\n  let game = new Game(canvas);\n  let view = new GameView(ctx,game);\n  game.draw(ctx);\n  view.start();\n\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(obj){\n  this.pos = obj['pos'];\n  this.vel = obj['vel'];\n  this.radius = obj['radius'];\n  this.color = obj['color'];\n  this.game = obj['game'];\n}\n\nMovingObject.prototype.move = function (){\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n  newPos = this.game.wrap(this.pos);\n  this.pos[0] = newPos[0];\n  this.pos[1] = newPos[1];\n};\n\nMovingObject.prototype.draw = function (ctx){\n  ctx.fillStyle = this.color;\n  let centerX = this.pos[0];\n  let centerY = this.pos[1];\n\n  ctx.beginPath();\n  ctx.arc(\n    centerX,\n    centerY,\n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  );\n\n  ctx.fill();\n};\n\nMovingObject.prototype.isCollidedWith = function (otherMovingObject){\n  // Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)\n  let dist = Math.sqrt((this.pos[0] - otherMovingObject.pos[0]) ** 2 + (this.pos[1] - otherMovingObject.pos[1]) ** 2);\n  if (dist < (this.radius*2)){return true;}\n};\n\n\nMovingObject.prototype.collideWith = function(otherObject){\n    // this.game.remove(this);\n    // this.game.remove(otherObject);\n\n    \n};\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Utilities = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nfunction Ship(pos,game){\n  obj = {\n    color: Ship.COLOR,\n    radius: Ship.RADIUS,\n    pos: pos,\n    vel: [0,0],\n    game: game\n  };\n  MovingObject.call(this, obj);\n}\n\n\n\nUtilities.inherits(Ship, MovingObject);\n\nShip.prototype.relocate = function(game){\n  this.pos = game.randomPosition();\n  this.vel = [0,0];\n};\nmodule.exports = Ship;\n\n\nShip.COLOR = \"red\";\nShip.RADIUS = 20;\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    let Surrogate = function(){};\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n  \n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });