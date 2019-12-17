console.log("Webpack is working!");
const GameView = require('./game_view.js');
const Game = require('./game.js');
const MovingObject = require("./moving_object.js");
window.MovingObject = MovingObject;
window.GameView = GameView;
window.Game = Game;
window.addEventListener('DOMContentLoaded', (event) => {
  // console.log(event);
  const canvas = document.getElementById('game-canvas');
  let ctx = canvas.getContext("2d");
  let game = new Game(canvas);
  let view = new GameView(ctx,game);
  game.draw(ctx);
  view.start();

});